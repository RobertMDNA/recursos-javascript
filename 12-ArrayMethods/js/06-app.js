// every nos permite devolver true en base a que todos nuestros elementos de un arreglo sean iguales
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 100 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 100 },
];

const result = carrito.every(product => product.precio < 1000); // se comprueba que el precio en cada iteracion sea menor a mil
console.log(result); // si en cada iteracion son menores los precios a true, se devolvera true