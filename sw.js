self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('pwa-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/app.js',
          /* Add other files and assets you want to cache here */
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  