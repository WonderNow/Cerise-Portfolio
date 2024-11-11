//********
//Apparition des éléments au scroll
//********
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.appear');
    for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    let distanceFromTop = element.getBoundingClientRect().top;
    if (distanceFromTop - window.innerHeight + 100 < 0) {
        element.classList.add('appear-active');
    } else {
        element.classList.remove('appear-active');
    }
    }
});


//********
// Désactive le scrolling pendant 3 secondes au load
//********
window.addEventListener('load', function() {
  // Ajoute la classe 'no-scroll' au body
  document.body.classList.add('no-scroll');
  
  // Retire la classe 'no-scroll' après 3 secondes
  setTimeout(function() {
      document.body.classList.remove('no-scroll');
  }, 3000); // 3000 ms = 3 secondes
});


//********
// Force le positionnement en haut de la page à chaque reload
//********
window.addEventListener('pagehide', function(event) {
    window.scrollTo(0, 0); // Fait défiler la page en haut
});


//********
// Fonction d'initialisation de Lenis Smooth Scroll
//********
function initLenisSmoothScroll() {
  let lenis;
  if (typeof Lenis !== 'undefined') {
      lenis = new Lenis({
          lerp: 0.1,
          wheelMultiplier: 1,
          gestureOrientation: 'vertical',
          normalizeWheel: false,
          smoothTouch: false
      });

      function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      $("[data-lenis-start]").on("click", function () {
          lenis.start();
      });

      $("[data-lenis-stop]").on("click", function () {
          lenis.stop();
      });

      $("[data-lenis-toggle]").on("click", function () {
          $(this).toggleClass("stop-scroll");
          if ($(this).hasClass("stop-scroll")) {
              lenis.stop();
          } else {
              lenis.start();
          }
      });
  }
}

// Attendre 3 secondes après le chargement de la page avant d'exécuter la fonction
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(initLenisSmoothScroll, 3000);  // Exécuter après 3 secondes
});
