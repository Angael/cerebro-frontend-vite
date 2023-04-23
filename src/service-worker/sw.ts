console.log('Hello from service worker!');

self.addEventListener('fetch', function (event) {
  console.log('fetch', event);
});

export {};
