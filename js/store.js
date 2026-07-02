// Persistent state in localStorage.
const KEY = 'manacledRun.v1';

const defaults = {
  completed: {},        // missionId -> { date, durationSec }
  log: [],              // [{missionId, date, durationSec}]
  keepsakes: {},        // collectibleId -> missionId
  freeRoam: false,      // unlock everything (ZR "skip ahead")
  music: { mode: 'off' }, // off | spotify
  spotify: { clientId: '', accessToken: '', refreshToken: '', expiresAt: 0, playlistUri: '', duckMode: 'auto' },
  captions: true,
};

let state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...structuredClone(defaults), ...JSON.parse(raw) };
  } catch (e) { /* fall through */ }
  return structuredClone(defaults);
}

export function get() { return state; }

export function save() {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function update(fn) {
  fn(state);
  save();
}

export function resetProgress() {
  state.completed = {}; state.log = []; state.keepsakes = {};
  save();
}
