// Spotify remote control: Authorization Code + PKCE (no client secret),
// playlist start, and voice-over ducking with automatic pause/resume fallback
// (iOS Spotify refuses remote volume changes with a 403).
import * as store from './store.js';

const SCOPES = 'user-modify-playback-state user-read-playback-state playlist-read-private playlist-read-collaborative';
const AUTH = 'https://accounts.spotify.com/authorize';
const TOKEN = 'https://accounts.spotify.com/api/token';
const API = 'https://api.spotify.com/v1';

function redirectUri() {
  return location.origin + location.pathname;
}

function b64url(bytes) {
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export async function connect() {
  const clientId = store.get().spotify.clientId.trim();
  if (!clientId) throw new Error('Enter your Spotify Client ID first.');
  const verifier = b64url(crypto.getRandomValues(new Uint8Array(48)));
  sessionStorage.setItem('sp_verifier', verifier);
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier));
  const challenge = b64url(new Uint8Array(digest));
  const p = new URLSearchParams({
    client_id: clientId, response_type: 'code', redirect_uri: redirectUri(),
    scope: SCOPES, code_challenge_method: 'S256', code_challenge: challenge,
  });
  location.href = `${AUTH}?${p}`;
}

// Call on page load; completes the OAuth round-trip if we returned with ?code=
export async function handleCallback() {
  const params = new URLSearchParams(location.search);
  const code = params.get('code');
  if (!code) return false;
  history.replaceState(null, '', location.pathname);
  const verifier = sessionStorage.getItem('sp_verifier');
  if (!verifier) return false;
  const body = new URLSearchParams({
    grant_type: 'authorization_code', code, redirect_uri: redirectUri(),
    client_id: store.get().spotify.clientId.trim(), code_verifier: verifier,
  });
  const res = await fetch(TOKEN, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
  if (!res.ok) throw new Error('Spotify sign-in failed: ' + res.status);
  const tok = await res.json();
  store.update(s => {
    s.spotify.accessToken = tok.access_token;
    s.spotify.refreshToken = tok.refresh_token;
    s.spotify.expiresAt = Date.now() + (tok.expires_in - 60) * 1000;
  });
  return true;
}

async function token() {
  const sp = store.get().spotify;
  if (!sp.accessToken) throw new Error('Not connected to Spotify.');
  if (Date.now() < sp.expiresAt) return sp.accessToken;
  const body = new URLSearchParams({
    grant_type: 'refresh_token', refresh_token: sp.refreshToken, client_id: sp.clientId.trim(),
  });
  const res = await fetch(TOKEN, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
  if (!res.ok) throw new Error('Spotify session expired — reconnect in Settings.');
  const tok = await res.json();
  store.update(s => {
    s.spotify.accessToken = tok.access_token;
    if (tok.refresh_token) s.spotify.refreshToken = tok.refresh_token;
    s.spotify.expiresAt = Date.now() + (tok.expires_in - 60) * 1000;
  });
  return tok.access_token;
}

async function api(method, path, body) {
  const t = await token();
  const res = await fetch(API + path, {
    method,
    headers: { Authorization: `Bearer ${t}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (res.status === 204 || res.status === 202) return null;
  if (!res.ok) {
    const err = new Error(`Spotify ${method} ${path} → ${res.status}`);
    err.status = res.status;
    try { err.detail = (await res.json()).error?.reason; } catch (e) {}
    throw err;
  }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

export function isConnected() {
  return !!store.get().spotify.refreshToken;
}

export async function playlists() {
  const out = [];
  let path = '/me/playlists?limit=50';
  while (path) {
    const page = await api('GET', path);
    out.push(...page.items.map(p => ({ uri: p.uri, name: p.name, tracks: p.tracks.total })));
    path = page.next ? page.next.replace(API, '') : null;
  }
  return out;
}

export async function player() {
  return api('GET', '/me/player');
}

// Start the chosen playlist on the user's active device.
export async function startMusic() {
  const uri = store.get().spotify.playlistUri;
  const st = await player();
  if (!st || !st.device) {
    throw new Error('No active Spotify device. Open Spotify, play any song for a second, then try again.');
  }
  await api('PUT', '/me/player/play', uri ? { context_uri: uri } : undefined);
  baseVolume = st.device.volume_percent ?? 70;
}

let baseVolume = 70;
let mode = null; // 'volume' | 'pause' (resolved on first duck)

export async function duck() {
  const pref = store.get().spotify.duckMode;
  if (pref === 'pause') mode = 'pause';
  if (mode !== 'pause') {
    try {
      const st = await player();
      if (st?.device?.volume_percent != null && st.device.volume_percent > 0) baseVolume = st.device.volume_percent;
      await api('PUT', `/me/player/volume?volume_percent=${Math.max(5, Math.round(baseVolume * 0.2))}`);
      mode = 'volume';
      return;
    } catch (e) {
      if (e.status === 403) mode = 'pause'; // device won't allow remote volume (iOS)
      else return; // transient error — don't stall the voice queue
    }
  }
  try { await api('PUT', '/me/player/pause'); } catch (e) {}
}

export async function restore() {
  if (mode === 'pause') {
    try { await api('PUT', '/me/player/play'); } catch (e) {}
  } else if (mode === 'volume') {
    try { await api('PUT', `/me/player/volume?volume_percent=${baseVolume}`); } catch (e) {}
  }
}

export async function stopMusic() {
  try { await api('PUT', '/me/player/pause'); } catch (e) {}
}

export function disconnect() {
  store.update(s => { s.spotify.accessToken = ''; s.spotify.refreshToken = ''; s.spotify.expiresAt = 0; });
}
