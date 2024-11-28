import Swal from "sweetalert2";
import { productoActivo } from "../main";
import { handleGetProductLocalStorage, setinLocalStorage } from "../persistence/localstorage";
import { cerrarPopUp } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById('inputnombre').value,
    img = document.getElementById('inputimg').value,
    precio = document.getElementById('inputprecio').value,
    tipo = document.getElementById('inputselect').value;

    let object = null; 
    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            img,
            precio,
            tipo,
        };
    } else {
        object = {
            // id: new Date().toISOString(),
            id: Math.random().toString(36),
            nombre,
            img,
            precio,
            tipo,            
        };
    }

    Swal.fire({
        title: "¡Listo!",
        text: "Artículo agregado con éxito.",
        icon: "success"
      });

     setinLocalStorage(object);
     handleGetProductsToStore();
     cerrarPopUp();
};


let botonAceptar = document.getElementById('botonaceptar');

botonAceptar.addEventListener('click',handleSaveOrModifyElements);



export const handleDeleteProduct = () => {

    Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás recuperar un artículo eliminado.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Eliminado",
            text: "El artículo se eliminó con éxito.",
            icon: "success"
          });
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id != productoActivo.id);
            localStorage.setItem('productos',JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            cerrarPopUp();
        }
      });


}