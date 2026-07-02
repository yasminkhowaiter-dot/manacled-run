// ElevenLabs voice generation for Manacled: Run.
//
//   node scripts/generate_audio.mjs --dry-run          # count clips/characters, no API calls
//   node scripts/generate_audio.mjs --weeks 1,2        # generate a subset
//   node scripts/generate_audio.mjs                    # generate everything missing
//   node scripts/generate_audio.mjs --list-voices      # audition your account's voices
//
// API key: set ELEVENLABS_API_KEY, or pass --key sk_...
// Resume-safe: clips are addressed by content hash and skipped if the mp3 exists.

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const { MISSIONS } = await import(new URL('../data/index.js', import.meta.url));
const cfg = JSON.parse(readFileSync(join(root, 'scripts', 'voices.json'), 'utf8'));

const args = process.argv.slice(2);
const flag = n => args.includes(`--${n}`);
const opt = n => { const i = args.indexOf(`--${n}`); return i !== -1 ? args[i + 1] : null; };

const API = 'https://api.elevenlabs.io/v1';
const key = opt('key') || process.env.ELEVENLABS_API_KEY;

// Must match js/audio.js clipId(): sha1(`${sp}|${text}`), first 12 hex chars.
const clipId = (sp, text) => createHash('sha1').update(`${sp}|${text}`).digest('hex').slice(0, 12);

if (flag('list-voices')) {
  if (!key) exit('Set ELEVENLABS_API_KEY or pass --key.');
  const res = await fetch(`${API}/voices`, { headers: { 'xi-api-key': key } });
  const data = await res.json();
  for (const v of data.voices) console.log(`${v.voice_id}  ${v.name}  [${v.labels?.accent || ''} ${v.labels?.description || ''}]`);
  process.exit(0);
}

// Collect unique clips, optionally filtered by week.
const weeks = opt('weeks')?.split(/[,\-]/).map(Number);
const inWeeks = w => !weeks || (opt('weeks').includes('-') ? w >= weeks[0] && w <= weeks[1] : weeks.includes(w));

const clips = new Map(); // id -> {sp, text, missions:[]}
for (const m of MISSIONS) {
  if (!inWeeks(m.week)) continue;
  for (const seg of m.segments) {
    for (const sc of seg.scenes || []) {
      const id = clipId(sc.sp, sc.text);
      if (!clips.has(id)) clips.set(id, { sp: sc.sp, text: sc.text, missions: [] });
      clips.get(id).missions.push(m.id);
    }
  }
}

const bySpeaker = {};
let totalChars = 0;
for (const c of clips.values()) {
  bySpeaker[c.sp] = (bySpeaker[c.sp] || 0) + c.text.length;
  totalChars += c.text.length;
}

console.log(`Missions in scope : ${MISSIONS.filter(m => inWeeks(m.week)).length}`);
console.log(`Unique clips      : ${clips.size}`);
for (const [sp, n] of Object.entries(bySpeaker)) console.log(`  ${cfg.voices[sp].name.padEnd(9)}: ${n.toLocaleString()} chars`);
console.log(`Total characters  : ${totalChars.toLocaleString()}`);
console.log(`Credit estimate   : ~${totalChars.toLocaleString()} credits on ${cfg.model_id} (halve it with eleven_turbo_v2_5)`);

const audioDir = join(root, 'audio');
mkdirSync(audioDir, { recursive: true });
const missing = [...clips.entries()].filter(([id]) => !existsSync(join(audioDir, `${id}.mp3`)));
console.log(`Already generated : ${clips.size - missing.length}`);
console.log(`To generate       : ${missing.length}`);

if (flag('dry-run')) process.exit(0);
if (!key) exit('Set ELEVENLABS_API_KEY or pass --key sk_...');
if (!missing.length) { console.log('Nothing to do.'); process.exit(0); }

let done = 0, spent = 0;
for (const [id, c] of missing) {
  const v = cfg.voices[c.sp];
  const body = JSON.stringify({ text: c.text, model_id: cfg.model_id, voice_settings: v.voice_settings });
  let attempt = 0;
  while (true) {
    const res = await fetch(`${API}/text-to-speech/${v.voice_id}?output_format=${cfg.output_format}`, {
      method: 'POST',
      headers: { 'xi-api-key': key, 'Content-Type': 'application/json' },
      body,
    });
    if (res.ok) {
      writeFileSync(join(audioDir, `${id}.mp3`), Buffer.from(await res.arrayBuffer()));
      spent += c.text.length;
      console.log(`[${++done}/${missing.length}] ${v.name.padEnd(9)} ${id}  "${c.text.slice(0, 52)}…"`);
      break;
    }
    if (res.status === 429 && attempt++ < 5) {
      const wait = 2000 * attempt;
      console.log(`  rate-limited, waiting ${wait / 1000}s…`);
      await new Promise(r => setTimeout(r, wait));
      continue;
    }
    exit(`ElevenLabs error ${res.status} on clip ${id} (${v.name}): ${await res.text()}\nGenerated so far are saved — rerun to resume.`);
  }
  await new Promise(r => setTimeout(r, 250)); // be gentle
}
console.log(`\nDone. ${done} clips, ~${spent.toLocaleString()} characters used.`);

function exit(msg) { console.error(msg); process.exit(1); }
