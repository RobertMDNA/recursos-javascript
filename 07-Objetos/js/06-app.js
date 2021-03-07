// object destructuring a objetos anidados
const producto = {
    nombre: 'Monitor 24"', // key = nombre: 'valor de la propiedad'
    precio: 300,
    disponible: true,
    informacion: {
        // este ya es un objeto que se encuentra dentro del objeto producto
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricado: {
            pais: 'china'
        }
    }
}

// para poder acceder a fabricacion dentro del objeto informacion hay que hacerlo de la siguiente manera
// si ahora quisieramos acceder al pais del objeto fabricado, solo hacemos lo siguiente
const { nombre, informacion: { fabricado: { pais } } } = producto; // object destructuring de la propiedad nombre del objeto producto

console.log(nombre); // mostrara el valor del nombre de la propiedad en el objeto
// console.log(informacion); // mostrara el objeto como tal sobre la informacion

// console.log(fabricado); // mostrara el objeto completo de fabricado
console.log(pais); // ya tenemos acceso a nuestro valor de pais