import { insertCategorias } from "./services/categorias.js";
import { handleSearchProductByName } from "./services/searchbar.js";
import { abrirPopUp } from "./views/modal.js";
import { handleGetProductsToStore } from "./views/store.js";

// ======APLICACION======

export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
}

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
}


handleGetProductsToStore();


insertCategorias();

let addElementButton = document.getElementById('header-agregar');

addElementButton.addEventListener('click',abrirPopUp);



const buttonSearch = document.getElementById('header-buscador-boton');

buttonSearch.addEventListener('click', () => {
    handleSearchProductByName();
}); 