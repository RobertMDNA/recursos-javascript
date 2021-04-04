// .some - 
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// comprobar si un valor existe en el arreglo
meses.forEach(mes => {
    if (mes === 'Febrero') {
        console.log(`${mes} existe`);
    }
})

// comrobar si un valor existe con el array method includes
// hay que tener en cuenta que este array method solo funciona para arreglos normales
const result = meses.includes('Febrero'); // lo que se hara aqui es, verificar que dicho valor exista en el array y el resultado lo almacenara en la variable result
console.log(result); // si el valor existe, devolvera true. en caso contrario devolvera false

// si queremos revisar un arreglo de objetos tendriamos que hacer uso de "some"
const existe = carrito.some(producto => {
    // lo que se hara sera comprobar si en el producto existe un celular, devolvera true
    return producto.nombre === 'Celular';
});
console.log(existe);