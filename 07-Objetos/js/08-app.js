"use strict"; 
// si bien, podemos darnos cuenta que podemos modificar, agregar e incluso podriamos hasta elminar propiedades de un objeto
// pero de que forma podriamos hacer para que nuestro objeto se comporte como una verdadera constante
// para empezar debemos habilitar el modo estricto en javascript 

// congelando un objeto para no poder modificarlo
const producto = {
    nombre: 'Monitor 24"', // key = nombre: 'valor de la propiedad'
    precio: 300,
    disponible: true
}

// ahora para poder evitar que nuestro array sea modificable podemos hacer uso del object method freeze
Object.freeze(producto); // el cual toma el objeto como tal a congelar

// entonces esto que hizimos hace unos instantes con el metodo freeze, ya no es posible
// producto.disponible = false; // modificando el valor de la propiedad disponible
// producto.imagen = 'imagen.jpg'; // agregando nueva propiedad imagen con su valor


// mostrando el objeto completo
console.log(producto);

// verificando si el objeto esta congelado o no
console.log(Object.isFrozen(producto));