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

        "img/atuacao.svg",
        "img/logo-backlgrs-p.png",
        "img/atuacao.svg",
        "img/bg-banner.png",
        "img/blip.jpg",
        "img/contact-customer.svg",
        "img/contact-ok.svg",
        "img/contact-sf.svg",
        "img/drag.svg",
        "img/Fire.svg",
        "img/hero-3d.webp",
        "img/icon-360.svg",
        "img/icon-address.svg",
        "img/icon-arrow.svg",
        "img/icon-clock.svg",
        "img/icon-mail.svg",
        "img/icon-marketing.svg",
        "img/icon-mulesoft.svg",
        "img/icon-phone.svg",
        "img/icon-sales.svg",
        "img/icon-service-cloud.svg",
        "img/icon-shop.svg",
        "img/icon-sobre.svg",
        "img/icon-tableu.svg",
        "img/icon-whats.svg",
        "img/icon-aster.svg",
        "img/ilustra.svg",
        "img/logo.svg",
        "img/logo-branco.png",
        "img/map.webp",
        "img/mascote.png",
        "img/nomes.txt",
        "img/quiz.png",
        "img/salesforce.png",
        "img/selo.svg",
        "img/servicos.webp",
        "img/star.png",
        "img/start.svg",
        "img/trybe.png",
        "img/dev.webp",
        "img/dev2.webp",
        "img/cust-360.png",
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
