// PREKSHA LIGHTING WORLD - Service Worker (v6 - Network First)
const CACHE_NAME = 'preksha-v6';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css?v=3.5',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/manifest.webmanifest'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {});
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // Do NOT intercept Supabase API or storage requests
  if (url.origin.includes('supabase.co')) {
    return;
  }
  // For same-origin GET requests, use Network First to always fetch latest code
  if (e.request.method === 'GET' && url.origin === self.location.origin) {
    e.respondWith(
      fetch(e.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => caches.match(e.request))
    );
  }
});
