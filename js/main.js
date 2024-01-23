var swiper = new Swiper(".mySwiper", {
  loop: false,
  slidesPerView: 1.2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    600: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 20,
  freeMode: false,
  slidesPerView: 1.1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 3.3,
      spaceBetween: 30,
    },
  },
});

function scrollTarget() {
  var links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      var targetId = link.getAttribute("href").substring(1);
      var target = document.getElementById(targetId);

      if (target) {
        var targetOffset = target.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });
      }
    });
  });
}

function menuMobile() {
  var dotsButton = document.querySelector(".dots");
  var menuMobile = document.querySelector(".menu-mobile");
  var closeIcon = document.querySelector(".icon-tabler-x");
  var links = document.querySelectorAll(".menu-mobile__links a");

  dotsButton.addEventListener("click", function () {
    menuMobile.style.display = "block";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", function () {
    menuMobile.style.display = "none";
    closeIcon.style.display = "none";
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menuMobile.style.display = "none";
      closeIcon.style.display = "none";
    });
  });
}

function resourcesModal() {
  //modais
  MicroModal.init();
  for (let i = 1; i <= 7; i++) {
    const button = document.getElementById(`open-modal-button-${i}`);
    if (button) {
      button.addEventListener("click", function () {
        MicroModal.show(`modal-${i}`);
      });
    }
  }
}

function sendForm() {
  // Envie o formulário usando AJAX
  var formulario = document.getElementById("meuFormulario");
  var dadosFormulario = new FormData(formulario);

  // Use AJAX para enviar dados para o arquivo PHP
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "formulario.php", true);
  xhr.onload = function () {
    if (xhr.status == 200) {
      var resposta = JSON.parse(xhr.responseText);
      document.getElementById("mensagem").innerHTML = resposta.mensagem;

      if (resposta.status === "enviado") {
        // Limpar os campos do formulário se o email for enviado com sucesso
        formulario.reset();
      }
    }
  };
  xhr.send(dadosFormulario);
}

function changeImageTestimonial() {
  var imagens = document.querySelectorAll(".s-carrer-img");
  var indexAtual = 0;

  function mostrarProximaImagem() {
    imagens[indexAtual].classList.remove("active");
    indexAtual = (indexAtual + 1) % imagens.length;
    imagens[indexAtual].classList.add("active");
  }

  // Inicia o slideshow
  setInterval(mostrarProximaImagem, 8000);
}

function hideShowWhats() {
  var heroBtn = document.querySelector(".s-hero-text__btn-hero");
  var whatsAppBtn = document.getElementById("whatsAppBtn");

  window.addEventListener("scroll", function () {
    var rect = heroBtn.getBoundingClientRect();

    // Verifica se o botão s-hero-text__btn-hero está fora da tela
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
      whatsAppBtn.style.display = "block";
    } else {
      whatsAppBtn.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  scrollTarget();
  menuMobile();
  resourcesModal();
  hideShowWhats();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../service-worker.js")
    .then(function (registration) {
      console.log("Service Worker registrado com sucesso:", registration);
    })
    .catch(function (error) {
      console.log("Falha ao registrar o Service Worker:", error);
    });
}

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
