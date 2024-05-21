document.addEventListener("DOMContentLoaded", function() {
    // Lista de cursos
    const cursos = [
        {
            imgSrc: "https://www.sketchappsources.com/resources/source-image/python-logo.png",
            title: "CURSO DE PYTHON",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni unde ipsa fuga optio impedit quia quisquam amet iure, ipsum odit exercitationem vitae error suscipit?",
            shortTitle: "PYTHON"
        },
        {
            imgSrc: "https://thumbs.dreamstime.com/b/javascript-logo-editorial-ilustrativo-sobre-fondo-blanco-illustrative-white-background-eps-descargar-vector-jpeg-banner-208329459.jpg",
            title: "CURSO DE JAVASCRIPT",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni unde ipsa fuga optio impedit quia quisquam amet iure, ipsum odit exercitationem vitae error suscipit?",
            shortTitle: "JAVASCRIPT"
        },
        {
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnE4xktqBeD9_GV397E85ckF-CS7Or4peRNC173fqjFA&s",
            title: "CURSO DE REACT",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni unde ipsa fuga optio impedit quia quisquam amet iure, ipsum odit exercitationem vitae error suscipit?",
            shortTitle: "REACT"
        }
    ];

    // Función para crear una tarjeta de curso
    function crearCard(cursos) {
        const card = document.createElement('div');
        card.classList.add('card');

        const frontFace = document.createElement('div');
        frontFace.classList.add('face', 'front');
        frontFace.innerHTML = `
            <img src="${cursos.imgSrc}" alt="">
            <h3>${cursos.title}</h3>
        `;

        const backFace = document.createElement('div');
        backFace.classList.add('face', 'back');
        backFace.innerHTML = `
            <h3>${cursos.shortTitle}</h3>
            <p>${cursos.description}</p>
            <div class="boton-compra">
                <button>ADQUIRIR</button>
            </div>
        `;

        card.appendChild(frontFace);
        card.appendChild(backFace);

        return card;
    }

    // Seleccionar el contenedor de las tarjetas
    const seccionCursos = document.getElementById('seccion-cursos');

    // Crear y añadir cada tarjeta de curso al contenedor
    cursos.forEach(cursos => {
        const cursoCard = crearCard(cursos);
        seccionCursos.appendChild(cursoCard);
    });
});
