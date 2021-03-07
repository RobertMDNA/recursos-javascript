// object methods
const producto = {
    nombre: 'Monitor 24"', // key = nombre: 'valor de la propiedad'
    precio: 300,
    disponible: true,
}

// Object.keys - permite obtener las llaves del objeto
console.log(Object.keys(producto));

// Object.values - permite obtener los valores del objeto
console.log(Object.values(producto));

// Object.entries - permite obtener los valores del objeto en un arreglo, su propiedad con ru respectivo valor
console.log(Object.entries(producto));