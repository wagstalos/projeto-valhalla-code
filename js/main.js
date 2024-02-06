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

function submitForm() {
  var form = document.getElementById("meuFormulario");

  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = "Obrigado por entrar em contato conosco!";
          form.reset();
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              status.innerHTML = data["errors"]
                .map((error) => error["message"])
                .join(", ");
            } else {
              status.innerHTML =
                "Oops! There was a problem submitting your form";
            }
          });
        }
      })
      .catch((error) => {
        status.innerHTML = "Oops! There was a problem submitting your form";
      });
  }
  form.addEventListener("submit", handleSubmit);
}

function tiltAnimation() {
  $(".js-tilt").tilt({
    glare: true,
    maxGlare: 1,
    scale: 1,
    maxTilt: 8,
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    speed: 300, // Speed of the enter/exit transition.
    transition: true, // Set a transition on enter/exit.
    disableAxis: false, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    maxGlare: 1,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  scrollTarget();
  menuMobile();
  particules();
  animationMarquee();
  submitForm();
  tiltAnimation();
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

window.onload = function () {
  var el = document.getElementById("g-recaptcha-response");
  if (el) {
    el.setAttribute("required", "required");
  }
};
