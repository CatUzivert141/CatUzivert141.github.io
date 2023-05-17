let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logoSpan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
       logoSpan.forEach((span, index) => {
            setTimeout(() => {
               span.classList.add('active');
            }, (index + 1) * 100);
       });

       setTimeout(() => {
          logoSpan.forEach((span, index) => {
            setTimeout(() => {
               span.classList.remove('active');
               span.classList.add('fade'); 
            }, (span + 1) * 50);
          });
       }, 2000);

       setTimeout(() => {
          intro.style.top  = '-100vh';
       }, 2300);

    });

});
// Función para agregar la clase "active" al enlace actual
var navbarItems = document.getElementsByClassName("navbar")[0].getElementsByTagName("a");
for (var i = 0; i < navbarItems.length; i++) {
  navbarItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
