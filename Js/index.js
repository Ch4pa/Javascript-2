// DOM 

let productosCatalogo = document.getElementById("productos")

/* let carritoDeCompra = document.getElementsByClassName("carrito") */

let iniciarS = document.getElementsByClassName(`iniciarSesion`)

let crearSesion = document.querySelector(`.crearSesion`)

let busqueda = document.getElementById(`searchBox`)

let coincidencia = document.getElementById("coincidencia")

let productosTotal = document.getElementById(`inicioMercado`)




// Funcion buscar

function buscarProducto(buscado, array) {

    let busquedaArray = array.filter(
        (ropa) => ropa.etiquetas.toLowerCase().includes(buscado.toLowerCase())   
    )
    if(busquedaArray.length == 0){
        coincidencia.innerHTML = "No hay coincidencias";
        mostrarRopa(busquedaArray);
    }
    else{
        coincidencia.innerHTML="";
        productosTotal.innerHTML= ""
        mostrarRopa(busquedaArray)
    }
    console.log("Ropa",busquedaArray)
     
}


// EVENTOS

busqueda.addEventListener("input", ()=> {
    buscarProducto(busqueda.value.toLowerCase(), productos)
})


crearSesion.addEventListener("click", ()=>{
    
})


// Json 

localStorage.setItem("misProductos", JSON.stringify(productos))

let getProductos = JSON.parse(localStorage.getItem("misProductos"))

