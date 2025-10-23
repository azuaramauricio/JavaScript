const producto = {
    nombre: "monitor de 20 pulgadas",
    predio: 20,
    disponible: true,
    informacion: {
        medidas: {
           peso: "1kg",
           medida: "1M"
        },
        fabricacion:
        { 
            pais: "china",
        }
    }
}

console.log(producto);
console.log(producto['nombre']);
console.log(producto['informacion']);
console.log(producto['informacion']['fabricante']);
console.log(producto['informacion']['medidas']['peso']);
console.log(producto['informacion']['fabricante']['pais']);