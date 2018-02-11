self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('miki').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/404.html',
                '/favicon.ico',
                '/assets/app.css',
                '/images/github.png',
                'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js',
                'http://fonts.googleapis.com/css?family=Indie+Flower|Ubuntu'
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