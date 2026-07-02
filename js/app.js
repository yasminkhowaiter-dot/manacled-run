import { MISSIONS, WEEKS } from '../data/index.js';
import { MissionPlayer, compile, fmt, SEG_LABELS } from './engine.js';
import * as audio from './audio.js';
import * as spotify from './spotify.js';
import * as store from './store.js';

const screen = document.getElementById('screen');
const tabs = document.getElementById('tabs');
let player = null;

function h(html) { const d = document.createElement('div'); d.innerHTML = html; return d; }
function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
function toast(msg, ms = 3200) {
  document.querySelector('.toast')?.remove();
  const t = h(`<div class="toast">${esc(msg)}</div>`).firstChild;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), ms);
}

/* ---------- missions list ---------- */
function isUnlocked(m) {
  if (store.get().freeRoam) return true;
  const idx = MISSIONS.indexOf(m);
  return idx === 0 || !!store.get().completed[MISSIONS[idx - 1].id];
}

function renderMissions() {
  tabs.classList.remove('hidden');
  const s = store.get();
  let out = `<div class="screen-head"><h1 class="title">Manacled<span class="sub">an 8-week 5k &middot; the manor gardens</span></h1></div>`;
  let week = 0;
  for (const m of MISSIONS) {
    if (m.week !== week) {
      week = m.week;
      out += `<div class="week-h">Week ${week} — ${WEEKS[week].title}</div><div class="week-note">${WEEKS[week].note}</div>`;
    }
    const done = !!s.completed[m.id];
    const unlocked = isUnlocked(m);
    out += `<div class="mission-card ${unlocked ? '' : 'locked'}" data-mission="${m.id}">
      <div class="m-num">${m.week}.${m.workout}</div>
      <div class="m-body"><div class="m-title">${esc(m.title)}</div>
      <div class="m-sub">${fmt(compile(m).total)} &middot; ${m.summary}</div></div>
      <div class="m-state">${done ? '<span class="badge-done">&#10003;</span>' : unlocked ? '&#9656;' : '&#128274;'}</div>
    </div>`;
  }
  screen.innerHTML = out;
  screen.querySelectorAll('.mission-card').forEach(el => el.onclick = () => {
    const m = MISSIONS.find(x => x.id === el.dataset.mission);
    if (!isUnlocked(m)) { toast('Finish the previous mission first — or enable Free roam in Settings.'); return; }
    renderDetail(m);
  });
  screen.scrollTop = 0;
}

/* ---------- mission detail ---------- */
function renderDetail(m) {
  const tl = compile(m);
  let segs = tl.segments.map(s =>
    `<div class="seg-row"><div class="s-time">${fmt(s.secs)}</div><div>${esc(s.label)}${s.detail ? ` — <span style="color:var(--ink-dim)">${esc(s.detail)}</span>` : ''}</div></div>`
  ).join('');
  screen.innerHTML = `
    <button class="back-link">&larr; Missions</button>
    <h1 class="title">${esc(m.title)}<span class="sub">Week ${m.week} &middot; Workout ${m.workout} &middot; ${fmt(tl.total)}</span></h1>
    <p class="detail-syn">${esc(m.synopsis)}</p>
    <div class="seg-list">${segs}</div>
    <button class="btn" id="start">Begin mission</button>`;
  screen.querySelector('.back-link').onclick = renderMissions;
  screen.querySelector('#start').onclick = async () => {
    audio.unlock();
    if (store.get().music.mode === 'spotify' && spotify.isConnected()) {
      try { await spotify.startMusic(); }
      catch (e) { toast(e.message, 5000); }
    }
    renderRun(m);
  };
  screen.scrollTop = 0;
}

/* ---------- run screen ---------- */
function renderRun(m) {
  tabs.classList.add('hidden');
  const tl = compile(m);
  screen.innerHTML = `
    <div class="run-screen">
      <div class="run-mtitle">${esc(m.title)} &middot; W${m.week}&#8202;/&#8202;${m.workout}</div>
      <div class="seg-label" id="segLabel"></div>
      <div class="seg-big" id="segBig"></div>
      <div class="clock" id="segClock">0:00</div>
      <div class="total-clock" id="totClock"></div>
      <div class="next-up" id="nextUp"></div>
      <div class="segbar" id="segbar">${tl.segments.map(() => '<div class="sb"><div class="fill"></div></div>').join('')}</div>
      <div class="caption" id="caption"></div>
      <div class="run-controls">
        <button class="btn secondary" id="pauseBtn">Pause</button>
        <button class="btn danger" id="endBtn">Abandon</button>
      </div>
    </div>`;
  const $ = id => document.getElementById(id);
  let cur = null;

  audio.setCaptionHandler(c => {
    if (!store.get().captions && c) { $('caption').innerHTML = ''; return; }
    $('caption').innerHTML = c ? `<div><span class="speaker">${esc(c.speaker)}</span>${esc(c.text)}</div>` : '';
  });

  player = new MissionPlayer(m, {
    onSegment(seg, idx, all) {
      cur = seg;
      $('segLabel').textContent = seg.label;
      $('segLabel').className = 'seg-label t-' + seg.type;
      $('segBig').textContent = seg.detail || '';
      const nxt = all[idx + 1];
      $('nextUp').textContent = nxt ? `Next: ${nxt.label} · ${fmt(nxt.secs)}` : 'Final segment';
      document.querySelectorAll('#segbar .sb').forEach((el, i) => el.classList.toggle('done', i < idx));
    },
    onTick(t, tl2) {
      if (cur) {
        $('segClock').textContent = fmt(cur.end - t);
        const i = tl2.segments.indexOf(cur);
        const el = document.querySelectorAll('#segbar .sb .fill')[i];
        if (el) el.style.width = `${((t - cur.start) / cur.secs) * 100}%`;
      }
      $('totClock').textContent = `${fmt(t)} / ${fmt(tl2.total)}`;
    },
    onPause(paused) { $('pauseBtn').textContent = paused ? 'Resume' : 'Pause'; },
    onDone(durationSec) { completeMission(m, durationSec); },
  });

  $('pauseBtn').onclick = () => player.pausedAt ? player.resume() : player.pause();
  $('endBtn').onclick = () => {
    if (!confirm('Abandon this mission? Progress won’t be saved.')) return;
    player.stop();
    if (store.get().music.mode === 'spotify') spotify.stopMusic();
    audio.setCaptionHandler(null);
    renderMissions();
  };
  player.start();
}

function completeMission(m, durationSec) {
  store.update(s => {
    s.completed[m.id] = { date: new Date().toISOString(), durationSec };
    s.log.unshift({ missionId: m.id, date: new Date().toISOString(), durationSec });
    s.keepsakes[m.collectible.id] = m.id;
  });
  if (store.get().music.mode === 'spotify') spotify.stopMusic();
  audio.setCaptionHandler(null);
  tabs.classList.remove('hidden');
  screen.innerHTML = `
    <div class="debrief">
      <h1 class="title">Mission complete<span class="sub">${esc(m.title)} &middot; ${fmt(durationSec)}</span></h1>
      <div class="col-icon">${m.collectible.icon}</div>
      <div class="col-name">${esc(m.collectible.name)}</div>
      <p class="col-note">${esc(m.collectible.note)}</p>
      <button class="btn" id="cont">Return to missions</button>
    </div>`;
  screen.querySelector('#cont').onclick = renderMissions;
}

/* ---------- mantel ---------- */
function renderMantel() {
  const s = store.get();
  const items = MISSIONS.map(m => {
    const owned = !!s.keepsakes[m.collectible.id];
    return `<div class="keepsake ${owned ? '' : 'locked'}" title="${owned ? esc(m.collectible.note) : 'Not yet recovered'}">
      <div class="k-icon">${owned ? m.collectible.icon : '&#10068;'}</div>
      <div class="k-name">${owned ? esc(m.collectible.name) : '???'}</div>
    </div>`;
  }).join('');
  screen.innerHTML = `<div class="screen-head"><h1 class="title">The Mantel<span class="sub">keepsakes &amp; recovered memories</span></h1></div>
    <div class="mantel-grid">${items}</div>`;
}

/* ---------- log ---------- */
function renderLog() {
  const s = store.get();
  const rows = s.log.length ? s.log.map(e => {
    const m = MISSIONS.find(x => x.id === e.missionId);
    const d = new Date(e.date);
    return `<div class="log-row"><div>${esc(m?.title || e.missionId)}</div>
      <div class="l-dim">${d.toLocaleDateString()} &middot; ${fmt(e.durationSec)}</div></div>`;
  }).join('') : `<p class="hint">No runs yet. The gardens are waiting.</p>`;
  screen.innerHTML = `<div class="screen-head"><h1 class="title">Run log</h1></div>${rows}`;
}

/* ---------- settings ---------- */
async function renderSettings() {
  const s = store.get();
  const connected = spotify.isConnected();
  screen.innerHTML = `
    <div class="screen-head"><h1 class="title">Settings</h1></div>

    <div class="set-group">
      <h3>Music — Spotify</h3>
      <div class="set-row"><span>Status</span><span class="pill ${connected ? 'ok' : ''}">${connected ? 'Connected' : 'Not connected'}</span></div>
      <label>Spotify Client ID</label>
      <input type="text" id="spClientId" value="${esc(s.spotify.clientId)}" placeholder="from developer.spotify.com/dashboard">
      ${connected ? `
        <label>Playlist for missions</label>
        <select id="spPlaylist"><option>Loading playlists…</option></select>
        <div class="set-row"><span>Play music during missions</span>
          <input type="checkbox" class="switch" id="musicMode" ${s.music.mode === 'spotify' ? 'checked' : ''}></div>
        <div class="set-row"><span>Ducking</span>
          <select id="duckMode" style="width:auto">
            <option value="auto" ${s.spotify.duckMode === 'auto' ? 'selected' : ''}>Auto (duck, fall back to pause)</option>
            <option value="pause" ${s.spotify.duckMode === 'pause' ? 'selected' : ''}>Always pause/resume</option>
          </select></div>
        <button class="btn secondary" id="spTest">Test duck (3s)</button>
        <button class="btn danger" id="spDisconnect">Disconnect</button>`
      : `<button class="btn" id="spConnect">Connect Spotify</button>
         <p class="hint">Needs Spotify <b>Premium</b>. Create a free app at
         <a href="https://developer.spotify.com/dashboard" target="_blank">developer.spotify.com/dashboard</a>,
         add <b>${esc(location.origin + location.pathname)}</b> as a Redirect URI, and paste the Client ID above.</p>`}
    </div>

    <div class="set-group">
      <h3>Voices &amp; captions</h3>
      <div class="set-row"><span>Show captions during runs</span>
        <input type="checkbox" class="switch" id="capToggle" ${s.captions ? 'checked' : ''}></div>
      <button class="btn secondary" id="voiceTest">Test the voices</button>
      <p class="hint">If generated ElevenLabs audio isn’t present yet, the app reads lines with your device’s built-in voices.</p>
    </div>

    <div class="set-group">
      <h3>Progression</h3>
      <div class="set-row"><span>Free roam (unlock all missions)</span>
        <input type="checkbox" class="switch" id="freeRoam" ${s.freeRoam ? 'checked' : ''}></div>
      <button class="btn danger" id="reset">Reset all progress</button>
    </div>`;

  const $ = id => document.getElementById(id);
  $('spClientId').onchange = e => store.update(x => x.spotify.clientId = e.target.value.trim());
  $('capToggle').onchange = e => store.update(x => x.captions = e.target.checked);
  $('freeRoam').onchange = e => store.update(x => x.freeRoam = e.target.checked);
  $('voiceTest').onclick = () => {
    audio.unlock();
    audio.speak('s', 'Healer Stroud. Your regimen begins tomorrow at first light.');
    audio.speak('d', 'Keep up, Granger. I haven’t got all day.');
    audio.speak('h', 'I remember running. I just can’t remember why.');
  };
  $('reset').onclick = () => {
    if (confirm('Erase all progress, keepsakes, and the run log?')) { store.resetProgress(); renderSettings(); toast('Progress erased.'); }
  };
  if (connected) {
    $('musicMode').onchange = e => store.update(x => x.music.mode = e.target.checked ? 'spotify' : 'off');
    $('duckMode').onchange = e => store.update(x => x.spotify.duckMode = e.target.value);
    $('spDisconnect').onclick = () => { spotify.disconnect(); renderSettings(); };
    $('spTest').onclick = async () => {
      try { await spotify.duck(); setTimeout(() => spotify.restore(), 3000); toast('Ducking now — music should dip or pause, then return.'); }
      catch (e) { toast(e.message, 5000); }
    };
    try {
      const lists = await spotify.playlists();
      const sel = $('spPlaylist');
      sel.innerHTML = `<option value="">Liked / current queue</option>` + lists.map(p =>
        `<option value="${p.uri}" ${p.uri === s.spotify.playlistUri ? 'selected' : ''}>${esc(p.name)} (${p.tracks})</option>`).join('');
      sel.onchange = e => store.update(x => x.spotify.playlistUri = e.target.value);
    } catch (e) {
      toast('Could not load playlists: ' + e.message, 5000);
    }
  } else {
    $('spConnect')?.addEventListener('click', async () => {
      try { await spotify.connect(); } catch (e) { toast(e.message, 4500); }
    });
  }
}

/* ---------- boot ---------- */
const routes = { missions: renderMissions, mantel: renderMantel, log: renderLog, settings: renderSettings };
tabs.querySelectorAll('.tab').forEach(b => b.onclick = () => {
  if (player && !player.done) { toast('Mission in progress — pause or abandon it first.'); return; }
  tabs.querySelectorAll('.tab').forEach(x => x.classList.toggle('active', x === b));
  routes[b.dataset.tab]();
});

(async () => {
  try {
    if (await spotify.handleCallback()) {
      tabs.querySelectorAll('.tab').forEach(x => x.classList.toggle('active', x.dataset.tab === 'settings'));
      await renderSettings();
      toast('Spotify connected.');
      return;
    }
  } catch (e) { toast(e.message, 5000); }
  renderMissions();
})();

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
