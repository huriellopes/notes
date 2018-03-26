let cacheName = 'notes-son.v-1.0.0';
let filesToCache = [
	'./',
	'index.html',
	'css/style.css',
	'js/array.observe.polyfill.js',
	'js/object.observe.polyfill.js',
	'js/scripts.js'
];

self.addEventListener('install', function (e) {
	console.log('[ServiceWorker] installer');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('[ServiceWorker] Caching app shell');
			return cache.addAll(filesToCache)
		})
	);
});

self.addEventListener('activete', function(e) {
	console.log('[ServiceWorker] Activete');
	e.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if(key != cacheName) {
					console.log('[ServiceWorker] Remove old cache');
					return caches.delete(key);
				}
			}));
		})
	);
});

self.addEventListener('fetch', function(e) {
	console.log('[ServiceWorker] Fetch', e.request.url);

	e.respondWith(
		caches.match(e.request).then(function(response){
			return response || fetch(e.request);
		})
	);
});