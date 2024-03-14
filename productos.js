const carrito = document.getElementById('carrito');
const productosGrid = document.querySelector('.productos-grid');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    productosGrid.addEventListener('click', agregarAlCarrito);
    carrito.addEventListener('click', eliminarDelCarrito);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function agregarAlCarrito(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const producto = e.target.parentElement;


        const imagen = producto.querySelector('img').src;
        const titulo = producto.querySelector('h3').textContent;
        const precio = producto.querySelector('.precio').textContent;


        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td><a href="#" class="borrar">X</a></td>
        `;


        listaCarrito.appendChild(fila);
    }
}

function eliminarDelCarrito(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar')) {
        const fila = e.target.parentElement.parentElement;
        listaCarrito.removeChild(fila);
    }
}

function vaciarCarrito() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}