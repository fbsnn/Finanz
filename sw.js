// ===== Service Worker: macht die App offline nutzbar =====
// Bei jedem Update die Versionsnummer hochzählen (v1 -> v2 ...)
const CACHE = 'finanzapp-v3';

const DATEIEN = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png',
    './apple-touch-icon.png',
    './favicon.png'
];

// Beim Installieren: alle App-Dateien zwischenspeichern
self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(DATEIEN)));
    self.skipWaiting();
});

// Alte Caches aufräumen
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// Anfragen: erst Internet versuchen (damit Updates sofort ankommen),
// ohne Internet die gespeicherte Version nehmen
self.addEventListener('fetch', e => {
    if (e.request.method !== 'GET') return;

    e.respondWith(
        fetch(e.request)
            .then(antwort => {
                const kopie = antwort.clone();
                caches.open(CACHE).then(c => c.put(e.request, kopie));
                return antwort;
            })
            .catch(() => caches.match(e.request, { ignoreSearch: true }))
    );
});
