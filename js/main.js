
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


document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  scrollTarget();
  menuMobile();

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
