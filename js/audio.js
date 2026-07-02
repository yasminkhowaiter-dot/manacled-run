// Voice clip playback: pre-generated ElevenLabs mp3s addressed by content hash,
// with Web Speech fallback when a clip is missing. Clips queue and never overlap.
import * as spotify from './spotify.js';
import * as store from './store.js';

export const VOICES = {
  d: { name: 'Draco',    rate: 0.95, pitch: 0.8 },
  h: { name: 'Hermione', rate: 1.0,  pitch: 1.05 },
  s: { name: 'Stroud',   rate: 0.98, pitch: 0.9 },
};

// Content-hash id — must match scripts/generate_audio.mjs (sha1 of `sp|text`, first 12 hex).
export async function clipId(sp, text) {
  const data = new TextEncoder().encode(sp + '|' + text);
  const buf = await crypto.subtle.digest('SHA-1', data);
  return [...new Uint8Array(buf)].slice(0, 6).map(b => b.toString(16).padStart(2, '0')).join('');
}

const queue = [];
let playing = false;
let ducked = false;
let duckTimer = null;
let onCaption = null;   // ({speaker, text}|null) => void
let el = new Audio();
el.preload = 'auto';

export function setCaptionHandler(fn) { onCaption = fn; }

export function speak(sp, text) {
  queue.push({ sp, text });
  if (!playing) drain();
}

export function clearQueue() {
  queue.length = 0;
  el.pause();
  window.speechSynthesis?.cancel();
  playing = false;
  onCaption?.(null);
  scheduleRestore(200);
}

async function drain() {
  playing = true;
  while (queue.length) {
    const { sp, text } = queue.shift();
    await duck();
    onCaption?.({ speaker: VOICES[sp]?.name || '', text });
    try {
      await playClip(sp, text);
    } catch (e) {
      await speakTTS(sp, text);
    }
  }
  playing = false;
  onCaption?.(null);
  scheduleRestore(1500);
}

function playClip(sp, text) {
  return new Promise(async (resolve, reject) => {
    const id = await clipId(sp, text);
    el.src = `audio/${id}.mp3`;
    el.onended = resolve;
    el.onerror = () => reject(new Error('missing clip'));
    try { await el.play(); } catch (e) { reject(e); }
  });
}

let voiceCache = null;
function pickSystemVoice(sp) {
  if (!voiceCache) voiceCache = window.speechSynthesis?.getVoices() || [];
  const brits = voiceCache.filter(v => /en[-_]GB/i.test(v.lang));
  const pool = brits.length ? brits : voiceCache.filter(v => /^en/i.test(v.lang));
  if (!pool.length) return null;
  const idx = { d: 0, s: 1, h: 2 }[sp] ?? 0;
  return pool[idx % pool.length];
}

function speakTTS(sp, text) {
  return new Promise(resolve => {
    if (!window.speechSynthesis) return resolve();
    let settled = false;
    const done = () => { if (!settled) { settled = true; clearTimeout(watchdog); resolve(); } };
    // Watchdog: if the speech engine stalls (no voices, backgrounded tab), the
    // queue must not hang — allow ~90ms per character, minimum 4s.
    const watchdog = setTimeout(() => { window.speechSynthesis.cancel(); done(); }, Math.max(4000, text.length * 90));
    const u = new SpeechSynthesisUtterance(text);
    const v = pickSystemVoice(sp);
    if (v) u.voice = v;
    u.rate = VOICES[sp]?.rate ?? 1;
    u.pitch = VOICES[sp]?.pitch ?? 1;
    u.onend = done;
    u.onerror = done;
    window.speechSynthesis.speak(u);
  });
}

async function duck() {
  clearTimeout(duckTimer);
  if (ducked) return;
  ducked = true;
  if (store.get().music.mode === 'spotify') {
    try { await spotify.duck(); } catch (e) { /* keep talking regardless */ }
  }
}

function scheduleRestore(ms) {
  clearTimeout(duckTimer);
  duckTimer = setTimeout(async () => {
    if (!playing && !queue.length && ducked) {
      ducked = false;
      if (store.get().music.mode === 'spotify') {
        try { await spotify.restore(); } catch (e) {}
      }
    }
  }, ms);
}

// Unlock audio + speech on first user gesture (iOS requirement).
export function unlock() {
  try {
    el.play().catch(() => {});
    el.pause();
    window.speechSynthesis?.getVoices();
  } catch (e) {}
}
if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => { voiceCache = null; };
}
