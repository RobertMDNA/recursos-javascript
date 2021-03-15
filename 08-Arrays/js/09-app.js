// forEach para iterar sobre un array
const carrito = [
	{nombre: 'Monitor 24"', precio: 200},
	{nombre: 'Teclado RGB', precio: 300},
	{nombre: 'Bocina Bluethoot', precio: 400},
	{nombre: 'Mouse Inalambrico', precio: 600},
	{nombre: 'Mouse Alambrico', precio: 400},
	{nombre: 'Laptop HP Black', precio: 400}
];

// recorriendo un array con un ciclo for normal
for (let i = 0; i < carrito.length; i++) {
	console.log(`${carrito[i].nombre} - ${carrito[i].precio}`);
}

// recorriendo un array con un forEach
carrito.forEach( function(producto, index) {
	console.log(`${producto.nombre} - ${producto.precio}`);
});