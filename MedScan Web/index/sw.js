const CACHE_NAME = 'medscan-cache-v1';
const urlsToCache = [
  '/',
  '/login-via.html',
  '/login-method.html',
  '/choose-role.html',
  '/password-verification.html',
  '/dashboard.html',
  '/signup.html',
  '/css/styles.css',
  '/js/script.js',
  '/js/signup-script.js',
  '/MedScan.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
