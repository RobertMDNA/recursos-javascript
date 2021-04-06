// find para obtener un nuevo arreglo, basado en la condicion que estamos revisando
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 100 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 100 },
];

// desarrollado con foreach
let resultado = null;
carrito.forEach((product, index)=>{
    if (product.nombre === 'Tablet') { // se comprueba que el nombre del producto sea 'Tablet
        resultado = carrito[index]; // despues a la variable resultado se le asigna el valor del objeto tablet en dicha posicion
    }
});
console.log(resultado);

// desarrollado con find
let resultado2 = carrito.find(product => product.nombre === 'Tablet');
console.log(resultado2);