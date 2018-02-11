self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('miki').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/404.html',
                '/favicon.ico',
                '/assets/app.css',
                '/images/github.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});