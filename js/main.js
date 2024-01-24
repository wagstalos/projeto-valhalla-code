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

function particules() {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.4008530152163807,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3.206824121731046,
        direction: "bottom-right",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
}

function animationMarquee() {
  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
    "--marquee-elements-displayed"
  );
  const marqueeContent = document.querySelector("ul.marquee-content");

  root.style.setProperty("--marquee-elements", marqueeContent.children.length);

  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  scrollTarget();
  menuMobile();
  particules();
  animationMarquee();
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
