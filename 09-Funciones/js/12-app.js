// arrow functions en un forEach y .map
// .map para iterar un array y sus diferencias conf forEach
const carrito = [
	{nombre: 'Monitor 24"', precio: 200},
	{nombre: 'Teclado RGB', precio: 300},
	{nombre: 'Bocina Bluethoot', precio: 400},
	{nombre: 'Mouse Inalambrico', precio: 600},
	{nombre: 'Mouse Alambrico', precio: 400},
	{nombre: 'Laptop HP Black', precio: 400}
];

// ambos array methods hacen exactamente lo mismo
// la diferencia que hay entre ambos, es que map te retorna un nuevo arreglo mientras que forEach no
// recorriendo un array con forEach
const nuevoArreglo = carrito.forEach(producto => console.log(`${producto.nombre} ${producto.precio}`));

// recorriendo un array con map
const nuevoSegundoArreglo = carrito.map(producto => `${producto.nombre} ${producto.precio}`);

console.log(nuevoSegundoArreglo); // mostrando el valor de nuevoSegundoArreglo - mientras que este si devuelve el nuevo arreglo