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
    const texto = 'Próximamente más cursos';
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
  