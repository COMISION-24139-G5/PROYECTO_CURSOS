document.addEventListener("DOMContentLoaded", function() {
    fetch('cursos.json')
        .then(response => response.json())
        .then(cursos => {
            const seccionCursos = document.getElementById('seccion-cursos');

            cursos.forEach(categoria => {
                const tituloCategoria = document.createElement('h1');
                tituloCategoria.textContent = categoria.category;
                seccionCursos.appendChild(tituloCategoria);

                const categoriaContainer = document.createElement('div');
                categoriaContainer.classList.add('categoria', categoria.category.toLowerCase().replace(" ", "-"));
                categoriaContainer.style.display = 'flex';
                categoriaContainer.style.flexWrap = 'wrap';
                categoriaContainer.innerHTML = `<span></span>`
                
                categoria.items.forEach(curso => {
                    const cursoCard = crearCard(curso);
                    categoriaContainer.appendChild(cursoCard);
                });

                seccionCursos.appendChild(categoriaContainer);
            });
        });

    function crearCard(curso) {
        const card = document.createElement('div');
        card.classList.add('card');

        const frontFace = document.createElement('div');
        frontFace.classList.add('face', 'front');
        frontFace.innerHTML = `
            <img src="${curso.imgSrc}" alt="">
            <h3>${curso.title}</h3>
        `;

        const backFace = document.createElement('div');
        backFace.classList.add('face', 'back');
        backFace.innerHTML = `
            <h3>${curso.shortTitle}</h3>
            <p>${curso.description}</p>
            <div class="boton-compra">
                <button>ADQUIRIR</button>
            </div>
        `;

        card.appendChild(frontFace);
        card.appendChild(backFace);

        return card;
    }
});