// el problema con los objetos
const producto = {
    nombre: 'Monitor 24"', // key = nombre: 'valor de la propiedad'
    precio: 300,
    disponible: true
}

// si recordamos una variable que ha sido definida con const no puede reasignarse su valor
// sin embargo, los objetos si se pueden reasignar

// reasignando el valor de una propiedad de nuestro objeto producto
producto.disponible = false;

// mostrando el arreglo completo
console.log(producto);

// esto sucede a que aunque tengamos un objeto de tipo constante, si podemos reescribir sus valores, agregar o eliminar