// filter para obtener todos los valores especificos que cumplan una cierta condicion
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 100 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 100 },
];

// obteniendo todos los productos cuyo precio sean igual a 100
let result = carrito.filter(product => product.precio === 100);
console.log(result);

// obteniendo todos los productos cuyo precio sean menora 400
let result2 = carrito.filter(product => product.precio < 400);
console.log(result2);

// obteniendo todos los productos sin incluir los audifonos
let result3 = carrito.filter(product => product.nombre !== 'Audifonos');
console.log(result3);