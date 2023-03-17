//********
//apparition des éléments au scroll
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
var body = document.querySelector('body');
// Ajoute la classe 'no-scroll' pour désactiver le scrolling
body.classList.add('no-scroll');
// Réactive le scrolling après 3 secondes
setTimeout(function(){
    body.classList.remove('no-scroll');
}, 3000);


//********
// Force le positionnement en haut de la page à chaque reload
//********
window.addEventListener('pagehide', function(event) {
    window.scrollTo(0, 0); // Fait défiler la page en haut
});