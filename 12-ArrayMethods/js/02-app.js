// findIndex para encontrar la posicion de un elemento en un arreglo
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// encontrando la posicion de un elemento con un foreach
meses.forEach((mes, index) => {
    if (mes === 'Abril') {
        console.log(index);
    }
});

// comprobando la posicion de un elemento en un arreglo de objetos con foreach
carrito.forEach((producto, index) => {
    if (producto.nombre === 'Audifonos') {
        console.log(`Producto encontrado en la posicion ${index}`);
    }
});

// encontrando la posicino de un elemento con findIndex
const indice = meses.findIndex(mes => mes === 'Abril'); // hace lo mismo que el codigo anterior pero mas corto, en caso de que queramos buscar un valor que no existe en el arreglo, retornara -1. Esto quiere decir que no lo pudo encontrar.
console.log(indice);

// encontrando la posicion de un elemento con findIndex en un arreglo de objetos
const producto = carrito.findIndex(product => product.nombre === 'Celular');
console.log(producto);