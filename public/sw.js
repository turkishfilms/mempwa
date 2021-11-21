
self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('mempwa').then(cache => {
        console.log("added")
        return cache.addAll([
            '/',
            '/index.html',
            '/index.js',
            '/style.css',
            '/assets',
            '/manifest.json',
          ]);
      })      
    );
   });

self.addEventListener('fetch', e =>{
    console.log("event",e)
    console.log("caches.match", caches.match(e.request))
    e.respondWith(woah(e) || noah(e))
})

function woah(e){
    console.log("wpah", caches.match(e.request))
    return caches.match(e.request)
}

function noah(e){
    console.log("npah", fetch(e.request))
    return fetch(e.request)
}