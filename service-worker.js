const CACHE_NAME = 'financas-casal-cache-v1';
const urlsToCache = [
  '.',
  'index.html',
  'manifest.json',
  // Adicione aqui todos os seus arquivos estáticos (CSS, JS, imagens, etc.)
  'icon-192.png', // Novo ícone PNG
  'icon-512.png', // Novo ícone PNG
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // No cache - fetch from network
        return fetch(event.request);
      })
  );
});