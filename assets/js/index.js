// -----------------------------------------
// ---------------- CARTAS -----------------
// -----------------------------------------
let cardContainer = document.querySelector('.card-container');

for(let i = 0; i < 6; i++){
    let card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <a href="industry.html">
        <div class="card-img">
            <img src="https://us.123rf.com/450wm/rashadashurov/rashadashurov2002/rashadashurov200201094/140529504-icono-de-foto-en-blanco.jpg?ver=6" alt="Card image cap">
        </div>

        <div class="card-content">
            <!-- Titulo = Nombre empresa -->
            <div class="card-title"> 
                <span class="card-title-text"> Nombre Empresa </span>
            </div>

            <div class="card-categories-container"> 
                <div class="card-categorie"> Categoria 1 </div>
                <div class="card-categorie"> Categoria 2 </div>
                
            </div>
        </div>
    </a>    
    `;
cardContainer.appendChild(card);
}

// -----------------------------------------
// ---------------- FILTROS ----------------
// -----------------------------------------

let formButton = document.querySelector('#filter-form');
formButton.addEventListener('click', function(){
    event.preventDefault();
    let rubro = document.querySelector('#rubro');
    let ciudad = document.querySelector('#ciudad');
    let nombre = document.querySelector('#nombre');

    console.log(rubro.value);
    console.log(ciudad.value);  
    console.log(nombre.value);
});


// -----------------------------------------
// ---------------- CAROUSEL ----------------
// -----------------------------------------

url = [ 
    'https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-600nw-2079504220.jpg',
    'https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-600nw-2079504220.jpg',
    'https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-600nw-2079504220.jpg'
]

let slicer = document.querySelector('.swiper-wrapper');

for(let i = 0; i < 3; i++){

    let container = document.createElement('div');
    container.classList.add('swiper-slide');

    let img = document.createElement('img');
    img.src = url[i];
    img.alt = 'Slider';

    container.appendChild(img);

    slicer.appendChild(container);

}