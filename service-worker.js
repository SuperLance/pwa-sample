// Listen for install event, set callback
self.addEventListener('install', function(event) {
   console.log('Thank you for installing service worker')
});

self.addEventListener('activate', function(event) {
   console.log('activated')
});


// get data from cache if there is this data in cache, if not, get from network request and save it.
self.addEventListener('fetch', function(event) {
   event.respondWith(
      caches.open('mysite-dynamic').then(function(cache) {
         return cache.match(event.request).then(function (response) {
            return response || fetch(event.request).then(function(response) {
               cache.put(event.request, response.clone());
               return response;
            });
         });
      })
   );
});