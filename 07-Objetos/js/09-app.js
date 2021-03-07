// sellar un objeto
const producto = {
    nombre: 'Monitor 24"', // key = nombre: 'valor de la propiedad'
    precio: 300,
    disponible: true
}

// seal a diferencia de freeze, este object method si permite modificar las propiedades existentes.
// pero no permite agregar ni eliminar propiedades 
Object.seal(producto);

// modificando una propiedad del objeto
producto.disponible = false;

// mostrando el objeto completo
console.log(producto);

// comprobar si un objeto esta sellado
console.log(Object.isSealed(producto));
