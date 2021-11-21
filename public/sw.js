self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('mempwa').then(cache => {
            console.log("adding")
            return cache.addAll([
                '/',
                'index.html',
                'index.js',
                'style.css',
                'assets',
                'manifest.json',
            ]);
        })
    );
});

self.addEventListener('fetch', e => e.respondWith(caches.match(e.request) || fetch(e.request)))