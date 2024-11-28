// Traer productos al LocalStorage
export const handleGetProductLocalStorage = () => {
    const productos = JSON.parse(localStorage.getItem('productos'));
    if (productos) {
        return productos;
    } else {
        return [];
    }
};

// Guardar en LocalStorage


// Recibir un producto
export const setinLocalStorage = (productIn) => {
    if (productIn) {
    // traer los elementos
        let productsInLocal = handleGetProductLocalStorage();
        const existingIndex = productsInLocal.findIndex(
        (productsLocal) => productsLocal.id == productIn.id
    );
    


    // verificar si el elemento existe (si existe se reemplaza, si no se agrega)
    if (existingIndex != -1) {
        productsInLocal[existingIndex] = productIn;
    } else {
        productsInLocal.push(productIn);   
    }
    // setear el nuevo array
    localStorage.setItem('productos',JSON.stringify(productsInLocal))
}
    };