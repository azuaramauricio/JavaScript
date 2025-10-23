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

const {nombre} = producto;
console.log(nombre);