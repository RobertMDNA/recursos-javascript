// reduce para reducir el numero de elementos a buscar en nuestro arreglo
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let total = 0; // contador que almacenara la suma total de todos los productos

// revisando entre el arreglo de objetos la cantidad final e indicarle al usuario cuanto pagar con un foreach
carrito.forEach(producto => {
    total += producto.precio; // al total se le suma el precio en cada iteracion
});

console.log(`Total a pagar: ${total}`); // variable que imprime el total

// haciendo la misma operacion pasada pero con el arrayMethod .reduce
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0); // -> 0 valor inicial
console.log(`Total a pagar: ${resultado}`);