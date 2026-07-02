// Mission player: compiles a mission's segments into an absolute timeline,
// ticks on wall-clock time, and fires voice scenes at their offsets.
import * as audio from './audio.js';

export const SEG_LABELS = {
  walk: 'Walk', fastwalk: 'Fast walk', run: 'Run', slowrun: 'Slow run',
  freeform: 'Free-form run', stretch: 'Stretch', exercise: 'Exercise', rest: 'Recover',
};

// Debug: append ?speed=20 to the URL to fast-forward workouts during testing.
const SPEED = Math.max(1, Number(new URLSearchParams(location.search).get('speed')) || 1);

export function compile(mission) {
  let t = 0;
  const segments = [];
  const scenes = [];
  for (const seg of mission.segments) {
    const start = t, end = t + seg.secs;
    segments.push({ ...seg, start, end, label: seg.label || SEG_LABELS[seg.type] || seg.type });
    for (const sc of seg.scenes || []) {
      scenes.push({ time: start + Math.min(sc.at, seg.secs - 1), sp: sc.sp, text: sc.text, fired: false });
    }
    t = end;
  }
  scenes.sort((a, b) => a.time - b.time);
  return { segments, scenes, total: t };
}

export class MissionPlayer {
  constructor(mission, handlers) {
    this.mission = mission;
    this.tl = compile(mission);
    this.h = handlers;
    this.startedAt = 0;
    this.pausedAt = 0;
    this.pausedTotal = 0;
    this.timer = null;
    this.segIdx = -1;
    this.done = false;
    this.wakeLock = null;
  }

  elapsed() {
    const now = this.pausedAt || Date.now();
    return ((now - this.startedAt - this.pausedTotal) / 1000) * SPEED;
  }

  start() {
    this.startedAt = Date.now();
    this.acquireWakeLock();
    this.timer = setInterval(() => this.tick(), 250);
    document.addEventListener('visibilitychange', this._reWake = () => {
      if (document.visibilityState === 'visible') this.acquireWakeLock();
    });
    this.tick();
  }

  async acquireWakeLock() {
    try { this.wakeLock = await navigator.wakeLock?.request('screen'); } catch (e) {}
  }

  pause() {
    if (this.pausedAt) return;
    this.pausedAt = Date.now();
    audio.clearQueue();
    this.h.onPause?.(true);
  }

  resume() {
    if (!this.pausedAt) return;
    this.pausedTotal += Date.now() - this.pausedAt;
    this.pausedAt = 0;
    this.h.onPause?.(false);
  }

  stop() {
    clearInterval(this.timer);
    this.wakeLock?.release().catch(() => {});
    document.removeEventListener('visibilitychange', this._reWake);
    audio.clearQueue();
  }

  tick() {
    if (this.pausedAt || this.done) return;
    const t = this.elapsed();

    // segment transitions
    const idx = this.tl.segments.findIndex(s => t >= s.start && t < s.end);
    if (idx !== -1 && idx !== this.segIdx) {
      this.segIdx = idx;
      this.h.onSegment?.(this.tl.segments[idx], idx, this.tl.segments);
    }

    // fire due scenes
    for (const sc of this.tl.scenes) {
      if (!sc.fired && t >= sc.time) {
        sc.fired = true;
        audio.speak(sc.sp, sc.text);
      }
    }

    this.h.onTick?.(t, this.tl);

    if (t >= this.tl.total) {
      this.done = true;
      this.stop();
      this.h.onDone?.(Math.round((Date.now() - this.startedAt - this.pausedTotal) / 1000));
    }
  }
}

export function fmt(sec) {
  sec = Math.max(0, Math.round(sec));
  const m = Math.floor(sec / 60), s = sec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}
