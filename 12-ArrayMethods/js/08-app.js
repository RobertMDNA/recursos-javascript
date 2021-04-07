// haciendo uso del rest operator o rest operatos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// agregando un nuevo elemento al final de un arreglo tradicional con spread operator
const mesesNew = [...meses, 'Agosto'];
console.log(mesesNew);

// agregando una nueva propiedad a un arreglo de objetos
const carrito2 = [...carrito, {nombre: 'Disco Duro', precio: 200}];
console.log(carrito2);