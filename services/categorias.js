import { categoriaActiva } from "../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

export const insertCategorias = () => {

    const handleFilterProductsByCategory = (categoryIn) => {
        const products = handleGetProductLocalStorage();

        switch (categoryIn) {
            case categoriaActiva:
                handleRenderList(products);
                break;
            case "lista-todo":
                handleRenderList(products);
                break;
            case "Hamburguesa":
            case "Papas":
            case "Gaseosa":
                const result = products.filter((el) => el.tipo === categoryIn);
                handleRenderList(result);
            default:
                break;
            case "lista-mayorprecio":
                const resultPrecioMayor = products.sort((a,b) => b.precio - a.precio);
                handleRenderList(resultPrecioMayor);
                break;
            case "lista-menorprecio":
                const resultPrecioMenor = products.sort((a,b) => a.precio - b.precio);
                handleRenderList(resultPrecioMenor);
                break;                
        }
    };




    let lista = document.getElementById('categorias-lista-ul');
    lista.innerHTML = `
        <li class="lista-elemento" id="lista-todo">Todos los productos</li>
        <li class="lista-elemento" id="Hamburguesa">Hamburguesas</li>
        <li class="lista-elemento" id="Papas">Papas</li>
        <li class="lista-elemento" id="Gaseosa">Gaseosas</li>
        <li class="lista-elemento" id="lista-mayorprecio">Mayor precio</li>
        <li class="lista-elemento" id="lista-menorprecio">Menor precio</li>
        `;
    
    const liElements = lista.querySelectorAll('li');
    liElements.forEach((liEelement) => {
        liEelement.addEventListener('click', () => {
            handleClick(liEelement)
        })
    } );

    const handleClick = (elemento) => {
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el) => {
            if (el.classList.contains("liActive")) {
                el.classList.remove("liActive");
            } else {
                if (elemento === el) {
                    el.classList.add("liActive")
                }
            }
        });
    };

};