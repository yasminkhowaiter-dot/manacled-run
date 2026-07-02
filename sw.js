// Manacled: Run — service worker. App shell precached; voice clips cached on
// first play so completed downloads work offline in the field.
const VERSION = 'manacled-v1';
const SHELL = [
  '.', 'index.html', 'css/styles.css', 'icon.svg', 'icon-180.png', 'icon-192.png', 'icon-512.png', 'manifest.webmanifest',
  'js/app.js', 'js/engine.js', 'js/audio.js', 'js/spotify.js', 'js/store.js',
  'data/index.js', 'data/util.js',
  'data/week1.js', 'data/week2.js', 'data/week3.js', 'data/week4.js',
  'data/week5.js', 'data/week6.js', 'data/week7.js', 'data/week8.js',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // Spotify/ElevenLabs go to the network
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok && (url.pathname.includes('/audio/') || SHELL.some(p => url.pathname.endsWith(p)))) {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(e.request, copy));
      }
      return res;
    }))
  );
});
