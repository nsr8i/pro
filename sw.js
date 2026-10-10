// PREKSHA LIGHTING WORLD - PWA Service Worker (v4 - Network First)
const CACHE_NAME = 'preksha-v4';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/app.html',
  '/style.css',
  '/script.js',
  '/manifest.webmanifest',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/icon.svg',
  '/favicon.ico'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('Pre-caching non-fatal warning:', err);
      });
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Skip non-GET requests and external Supabase API / image storage requests
  if (e.request.method !== 'GET' || url.origin.includes('supabase.co')) {
    return;
  }

  // Network First with Cache Fallback for same-origin requests
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(e.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, responseClone));
          }
          return networkResponse;
        })
        .catch(async () => {
          const cachedResponse = await caches.match(e.request);
          if (cachedResponse) {
            return cachedResponse;
          }
          // If HTML navigation request fails while offline, serve cached home
          if (e.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('/index.html') || caches.match('/');
          }
          return new Response('Network error occurred while offline', { status: 503, statusText: 'Service Unavailable' });
        })
    );
  }
});
