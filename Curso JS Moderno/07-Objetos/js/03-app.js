const producto = {
    nombre: "monitor de 20 pulgadas",
    precio: 200,
    disponible: true
}

//Agregar nuevas propiedades al objeto

producto.imagen = "Imagen.jpg";

delete producto['disponible'];


console.log(producto);