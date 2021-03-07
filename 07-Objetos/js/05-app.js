// creando objetos dentro de otro objeto
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

// mostrando el objeto completo
console.log(producto);

// mostrando solo el objeto informacion con la sintaxis de punto
console.log(producto.informacion);

// accediendo y mostrando pais de fabricacion
console.log(producto.informacion.fabricado.pais);