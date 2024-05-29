// fixed nav
document.addEventListener("DOMContentLoaded", function() {
  const nav = document.getElementById('nav');
  const banner = document.getElementById('banner');
  const bannerHeight = banner.offsetHeight;

  window.addEventListener('scroll', function() {
    if (window.scrollY >= bannerHeight) {
      nav.classList.add('fixed');
      banner.classList.add('fixed'); // Agrega la clase 'fixed' al banner
    } else {
      nav.classList.remove('fixed');
      banner.classList.remove('fixed'); // Quita la clase 'fixed' del banner
    }
  });
});

// 


const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function Menu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", Menu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", Menu);
    }
  )


//   

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('texto');
    const texto = ' Próximamente más cursos';
    let index = 0;
  
    function textoAnimado() {
      if (index < texto.length) {
        textElement.style.opacity = '1'
        textElement.textContent += texto.charAt(index);
        index++;
        setTimeout(textoAnimado, 200); // velocidad de aparición del texto 
      } else {
        textElement.style.opacity = '1';
      }
    }
  
    setTimeout(textoAnimado, 1000); // inicio de la animación
  });
  
  // 


  //Este evento se ejecuta cuando se ha cargado el DOM
document.addEventListener('DOMContentLoaded', (event) => {
  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
      if (entry.isIntersecting ) {
        entry.target.classList.add('contador-start');
      }
    });
  },{ threshold: 1});

  // threshold = 1 -> La animacion comienza cuando el contador se ve completo, 0.5 -> comienza cuando el contador se ve la primera mitad, 0.1 ->  comienza cuando el contador se ve un 10%
  // toma valores entre 0 y 1

  document.querySelectorAll('.contador').forEach(e=> observer.observe(e));

});
// CARD TESTIMONIOS SLIDER



// FIN CARD TEST SLIDER