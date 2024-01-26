self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("meu-cache-v1").then(function (cache) {
      return cache.addAll([
        "/",
        "index.html",
        "css/main.min.css",
        "css/lib/aos.min.css",
        "css/lib/swiper.min.css",
        "js/main.js",
        "js/lib/aos.min.js",
        "js/lib/swiper.min.js",
        "js/lib/i18next.min.js",
        
        "about-img.png",
        "arrow-seemore.svg",
        "b-logo.svg",
        "bg-banner.png",
        "close-modal.svg",
        "conteudo.txt",
        "drag.svg",
        "Fire.svg",
        "hero--.jpg",
        "hero.jpg",
        "icon-360.svg",
        "icon-address.svg",
        "icon-arrow.svg",
        "icon-aster.svg",
        "icon-clock.svg",
        "icon-flash.svg",
        "icon-king.png",
        "icon-mail.svg",
        "icon-phone.svg",
        "icon-sobre.svg",
        "icon-whats.svg",
        "iconblog.png",
        "iconcart.png",
        "iconsite.png",
        "levoapp.png",
        "notification.svg",
        "preview.png",
        "profmanu.png",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
