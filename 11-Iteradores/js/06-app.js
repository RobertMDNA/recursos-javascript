// .forEach & .map
// el foreach es ideal para recorrer arreglos
// arreglo normal de strings
const pendientes = ['Tarea', 'Comer', 'Dormir', 'Estudiar JavaScript', 'Volver A Dormir'];

// recorriendo un arreglo normal con un foreach
pendientes.forEach((pendiente, index) => console.log(`${index} - ${pendiente}`));

// arreglo de objetos
const carrito = [
    {nombre: 'TV 32"', precio: 3200},
    {nombre: 'Mouse Inalambrico"', precio: 99.99},
    {nombre: 'Monitor Curvo 24"', precio: 2100},
    {nombre: 'TV 32"', precio: 3200},
]

// recorriendo un arreglo de objetos con un foreach
carrito.forEach((producto) => {
    console.log(`producto: ${producto.nombre}\tprecio: ${producto.precio}`);
});

// recorriendo un arreglo de objetos con un map
carrito.map((producto) => {
    console.log(`producto: ${producto.nombre}\tprecio: ${producto.precio}`);
})

// hay que tener en cuenta, que tanto foreach como map hacen la misma funcion.
// con la unica diferencia de que map se encarga tambien de crear un nuevo arreglo, mientras que un foreach no