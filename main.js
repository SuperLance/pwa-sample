if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('service-worker.js')
      .then(function(registration) {
         console.log('Registration successful, scope is:', registration.scope);
      })
      .catch(function(error) {
         console.log('Service worker registration failed, error:', error);
      });
}

// simple example for fetching data.
fetch('/data.json').then(function(response) {
   console.log(response)
})