const cacheig = "Tic-Tac-Toe-cache";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/images/android-chrome-192x192.png",
  "/images/android-chrome-512x512.png",
  "/images/apple-touch-icon.png",
  "/images/favicon.ico",
  "/images/favicon-16x16.png",
  "/images/favicon-32x32.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(cacheig).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    (async function () {
      try {
        var res = await fetch(event.request);
        var cache = await caches.open("cache");
        cache.put(event.request.url, res.clone());
        return res;
      } catch (error) {
        return caches.match(event.request);
      }
    })()
  );
});
