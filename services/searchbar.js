import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById('header-buscador-input');
    const products = handleGetProductLocalStorage();
    // const result = products.filter((el) => el.nombre.toLowerCase().includes(inputHeader.value));

    const result = products.filter((el) => {
        if (typeof el.nombre === 'string') {
            return el.nombre.toLowerCase().includes(inputHeader.value.toLowerCase());
        }
        return false;
    });
    
    handleRenderList(result);
};