// Cache names
const STATIC_CACHE = 'static-cache-v1';
const ASSETS_CACHE = 'assets-cache-v1';
const IMAGES_CACHE = 'images-cache-v1';

// Assets to cache immediately
const CACHE_ASSETS = [
  './index.html',
  './assets/js/vendor-*.js',
  './assets/js/index-*.js'
];

// Install event
self.addEventListener('install', (event) => {
  // Skip waiting so service worker activates immediately
  self.skipWaiting();

  // Precache static assets
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(CACHE_ASSETS);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  // Claim clients so service worker has control
  self.clients.claim();

  const cacheWhitelist = [STATIC_CACHE, ASSETS_CACHE, IMAGES_CACHE];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - caching strategy
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Special handling for image files
  if (
    event.request.method === 'GET' &&
    (event.request.destination === 'image' || 
     requestUrl.pathname.match(/\.(png|jpg|jpeg|svg|gif|webp)$/i))
  ) {
    // Cache-first strategy for images
    event.respondWith(
      caches.open(IMAGES_CACHE).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          
          return fetch(event.request.clone()).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // For other assets (JS, CSS)
  if (
    event.request.method === 'GET' &&
    (event.request.destination === 'script' || 
     event.request.destination === 'style' ||
     requestUrl.pathname.match(/\.(js|css)$/i))
  ) {
    // Cache-first for assets
    event.respondWith(
      caches.open(ASSETS_CACHE).then((cache) => {
        return cache.match(event.request).then((response) => {
          // Return cached response if found
          if (response) {
            return response;
          }
          
          // Otherwise fetch from network, cache, and return
          return fetch(event.request.clone()).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Network-first strategy for everything else
  event.respondWith(
    fetch(event.request.clone())
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          // Cache successful responses for next time
          caches.open(STATIC_CACHE).then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache if network fails
        return caches.match(event.request);
      })
  );
}); 