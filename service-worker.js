// Nome do cache
const CACHE_NAME = 'bingo-app-v1';

// Arquivos para cachear
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json'
];

// Instalar o Service Worker e cachear os arquivos
self.addEventListener('install', event => {
  console.log('Service Worker instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cacheando arquivos...');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch(err => {
        console.log('Erro ao cachear arquivos:', err);
      })
  );
  self.skipWaiting();
});

// Ativar o Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker ativando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interceptar requisições e usar o cache
self.addEventListener('fetch', event => {
  // Ignorar requisições que não são GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retornar do cache se disponível
        if (response) {
          return response;
        }

        // Caso contrário, fazer a requisição de rede
        return fetch(event.request)
          .then(response => {
            // Não fazer cache de requisições que não são OK
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Fazer uma cópia da resposta
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(err => {
            console.log('Erro na requisição:', err);
            // Retornar uma página offline se necessário
          });
      })
  );
});
