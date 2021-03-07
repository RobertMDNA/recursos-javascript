// destructuring de objetos
const producto = {
    nombre: 'Monitor 24"', // key = nombre: 'valor de la propiedad'
    precio: 300,
    disponible: true
}

// mostrando el objeto completo
console.log(producto);

// si quisieramos asignar dicho valor de un objeto podriamos hacerlo con la sintaxis de punto
// esta es la forma anterior de hacerla
const nombre = producto.nombre; // el valor de producto se asignara a la variable nombre

// mostrando la variable producto por pantalla
console.log(nombre);

// gracias a es6 tenemos algo conocido como object destructuring
// esto quiere decir que podemos extraer el valor del objeto y crear la variable todo en un mismo paso

// aplicando object destructuring
const { precio, disponible } = producto; // entre brackets va la variable a descomponer, = del objeto a descomponer

// si quisieramos extraer mas elementos del objeto podemos hacer otro object destructuring igual. Pero la ventaja de esto es que si estamos trabajando dentro del mismo objeto.
// podemos separar cada elemento por una simple coma

console.log(precio);
console.log(disponible);