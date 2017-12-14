const CACHE_NAME = `cache__timestamp__`;
const to_cache = __assets__.concat(__javascript__);

self.addEventListener('install', event => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then(cache => cache.addAll(to_cache))
			.then(() => {
				self.skipWaiting();
			})
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(async keys => {
			for (const key of keys) {
				if (key !== CACHE_NAME) await caches.delete(key);
			}

			await self.clients.claim();
		})
	);
});

self.addEventListener('fetch', event => {
	if (!/^https?/.test(event.request.url)) return;

	event.respondWith(
		caches
			.open(CACHE_NAME)
			.then(async cache => {
				const response = await cache.match(event.request);
				return response || fetch(event.request);
			})
	);
});
