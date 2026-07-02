# Manacled: Run

An 8-week couch-to-5K audio adventure in the style of *Zombies, Run! 5K Training*,
retelling the Draco/Hermione story of *Manacled* (senlinyu). You are Hermione.
Walks are the manor gardens; runs are the war coming back; the final workout is
the escape — five kilometres to the sea.

**A personal, non-commercial fan project.** *Manacled* is senlinyu's work; the
scripts here are original writing inspired by it.

## The programme

24 missions, 3 per week for 8 weeks, with segment structures cloned from the
real ZR5K plan: free-form runs from day one, heel lifts (wk 2), knee lifts
(wk 3), pace drills (wk 4), half-squats (wk 6), skipping (wk 7), and a
continuous 5K finale. Finish a mission to unlock the next, log the run, and
recover a keepsake for the Mantel.

## Quick start (on this PC)

```powershell
cd manacled-run
npm run serve        # http://localhost:8321
```

Until ElevenLabs audio is generated, the app speaks every line with your
device's built-in voices, so everything is fully testable immediately.
Add `?speed=20` to the URL to fast-forward a workout while testing.

## Generating the real voices (ElevenLabs)

```powershell
$env:ELEVENLABS_API_KEY = "sk_..."
node scripts/generate_audio.mjs --dry-run     # counts characters, costs nothing
node scripts/generate_audio.mjs --weeks 1,2   # or start small
node scripts/generate_audio.mjs               # everything missing
```

- ~484 unique clips, ~59,000 characters total (≈59k credits on
  `eleven_multilingual_v2`; set `"model_id": "eleven_turbo_v2_5"` in
  `scripts/voices.json` to halve credit use).
- Resume-safe: clips are content-addressed; rerunning only generates what's missing.
- Casting lives in `scripts/voices.json` (defaults: Daniel → Draco, Lily →
  Hermione, Alice → Stroud). Audition alternatives with
  `node scripts/generate_audio.mjs --list-voices`, paste in new voice IDs, and
  delete `audio/*.mp3` for any speaker you recast.
- If you edit a script line, its hash changes — rerun the generator and it
  creates just that clip.

## Spotify (music with auto-duck)

Needs **Spotify Premium**.

1. Go to <https://developer.spotify.com/dashboard>, log in, **Create app**.
   - App name: anything (e.g. "Manacled Run").
   - Redirect URI: the exact URL where the app runs, e.g.
     `http://localhost:8321/` for desktop testing **and** your phone URL
     (e.g. `https://<you>.github.io/manacled-run/`) once deployed.
   - API used: Web API.
2. Copy the **Client ID** into the app's Settings tab, tap **Connect Spotify**.
3. Pick a playlist, toggle "Play music during missions."

During voice-overs the app lowers Spotify's volume, then restores it. On
iPhones Spotify rejects remote volume changes, so the app automatically falls
back to pause → speak → resume (also selectable manually under Settings →
Ducking). Music control needs internet during the run; the voices themselves
work offline once cached.

## Putting it on your phone

The easiest path is GitHub Pages (free, HTTPS, works with Spotify's redirect
rules):

```powershell
cd manacled-run
git init; git add -A; git commit -m "Manacled: Run"
# create a repo named manacled-run on github.com, then:
git remote add origin https://github.com/<you>/manacled-run.git
git push -u origin main
# GitHub repo → Settings → Pages → Deploy from branch → main → root
```

Open `https://<you>.github.io/manacled-run/` on your phone, then "Add to Home
Screen." Add that URL as a second Redirect URI in the Spotify dashboard.
Generated audio in `audio/` is committed with the app (~30–60 MB) and cached
for offline runs after first play.

**On the run:** keep the screen on (the app requests a wake lock; a locked
phone browser will pause timers). Tracking is time-based, like the segments in
the original.

## Files

- `data/week*.js` — all 24 missions: structures, scripts, keepsakes
- `js/engine.js` — timeline compiler + scene scheduler
- `js/audio.js` — clip queue, content-hash addressing, TTS fallback, duck hooks
- `js/spotify.js` — PKCE OAuth + remote-control ducking
- `scripts/generate_audio.mjs` — ElevenLabs pipeline
