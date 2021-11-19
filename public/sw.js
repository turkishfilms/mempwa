self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('mempwa').then(function(cache) {
          cache.add('/')
          cache.add('index.html')
          cache.add('index.js')
          cache.add('images/favicon.png')
          return cache
      })
    );
   });