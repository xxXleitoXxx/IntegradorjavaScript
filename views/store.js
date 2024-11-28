import { setProductoActivo } from "../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage"
import { abrirPopUp } from "./modal";

// traer los elementos y llamar al render
export const handleGetProductsToStore = () => {
    const productos = handleGetProductLocalStorage();
    handleRenderList(productos);
}

// filtrar y renderizar
export const handleRenderList = (productosIn) => {
    const burgers = productosIn.filter((el) => el.tipo == "Hamburguesa");
    const papas = productosIn.filter((el) => el.tipo == "Papas");
    const gaseosas = productosIn.filter((el) => el.tipo == "Gaseosa");

    // renderizar
const renderProductGroup = (productos, title) => {
    if (productos.length > 0) {
        const productosHTML = productos.map((producto, index) => {
            return `
        <div class="containerTargetItem"
            id="product-${producto.tipo}-${index}">
            <div class="targetItems">
                <img src=${producto.img} alt="">
                <div class="targetProps">
                    <h2>${producto.nombre}</h2>       
                    <p><b>Precio:</b>${producto.precio}</p>   
                </div>
            </div>
        </div>`;
        });
        
        return `
            <section class="sectionStore">
                <div class="containerTitleSection">
                    <h3>${title}</h3>            
                </div>

                <div class="containerProductStore">
                    ${productosHTML.join("")}
                </div>
            </section>
        `;
    }
    else{
        return ""
    }
};

// Renderizar cada uno de los productos dentro de su categoria

    const appContainer = document.getElementById('elementos');
    appContainer.innerHTML = `
        ${renderProductGroup(burgers, "Hamburguesa")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(gaseosas, "Gaseosa")}
    `;

// añade los eventos de manera dinamica
    const addEvents = (productosIn) => {
        if (productosIn) {
            productosIn.forEach((element,index) => {
                const productContainer = document.getElementById(`product-${element.tipo}-${index}`);
                console.log(productContainer);
                productContainer.addEventListener('click', () => {
                    setProductoActivo(element);
                    abrirPopUp();
            });
        });        
        }
    };


    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);


};