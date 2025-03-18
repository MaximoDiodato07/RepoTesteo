// ---- CARGA IMAGEN PRINCIPAL ----
let mainImg = document.querySelector('.main-img-container');
mainImg.innerHTML = `
<img src="https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-600nw-2079504220.jpg" alt="Card image cap" class="main-image">
`;

// ---- CARGA DE OTRAS IMAGENES ----
let carousel = document.querySelector('.carousel');

for (let i = 0; i < 10; i++) {
    let image = document.createElement('img');
    image.src = 'https://us.123rf.com/450wm/rashadashurov/rashadashurov2002/rashadashurov200201094/140529504-icono-de-foto-en-blanco.jpg?ver=6';
    image.alt = 'Card image cap';
    image.classList.add('other-image');
    carousel.appendChild(image);
}

let imageContainer = document.querySelector('.other-img-container');
imageContainer.appendChild(carousel);


// ---- Categorias ---

let categoriesContainer = document.querySelector('.categories-container');
categoriesContainer.innerHTML = `
    <div class="card-categorie"> Categoria 1 </div>
    <div class="card-categorie"> Categoria 2 </div>
`;

