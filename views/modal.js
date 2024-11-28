import { productoActivo, setProductoActivo } from "../main";
import { handleDeleteProduct } from "../services/product";

export const abrirPopUp = () => {
    const popup = document.getElementById('popup-container');
    popup.style.display='flex';

    const botonEliminar = document.getElementById('botoneliminar');
    if (productoActivo) {
        botonEliminar.style.display = 'block';
    } else {
        botonEliminar.style.display = 'none';
    }

    if (productoActivo) {
        const nombre = document.getElementById('inputnombre'),
        img = document.getElementById('inputimg'),
        precio = document.getElementById('inputprecio'),
        tipo = document.getElementById('inputselect');
        img.value = productoActivo.img;
        precio.value = productoActivo.precio;
        nombre.value = productoActivo.nombre;
        tipo.value = productoActivo.tipo;
    }
};

let botonCancelar = document.getElementById('botoncancelar');

export const cerrarPopUp = () => {
    const popup = document.getElementById('popup-container');
    popup.style.display='none';
    resetModal();
    setProductoActivo(null);
};

botonCancelar.addEventListener('click',cerrarPopUp);



const resetModal = () => {
    const nombre = document.getElementById('inputnombre'),
    img = document.getElementById('inputimg'),
    precio = document.getElementById('inputprecio'),
    tipo = document.getElementById('inputselect');
    img.value = "";
    precio.value = null;
    nombre.value = "";
    tipo.value = "Seleccione una opción";
};

const botonEliminar = document.getElementById('botoneliminar');
botonEliminar.addEventListener('click', () => {
    handleButtonDelete();
})

const handleButtonDelete = () => {
    handleDeleteProduct();
}