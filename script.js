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
        setTimeout(textoAnimado, 250); // velocidad de aparición del texto 
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

  // threshold = 1 -> La animación comienza cuando el contador se ve complento
  // threshold = 0.5 -> La animación comienza cuando el contador se ve la primera mitad
  // threshold = 0.1 -> La animación comienza cuando el contador se ve un 10%
  //Es decir toma valores entre 0 y 1

  document.querySelectorAll('.contador').forEach(e=> observer.observe(e));

});