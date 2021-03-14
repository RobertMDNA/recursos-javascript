// eliminar elementos con splice
const carrito = []; // iniciamos con un arreglo vacio, ya que un carrito siempre inicia vacio

// definir un producto
const producto = {
	nombre: 'Monitor 24"',
	precio: 300
}

// definir otro producto
const producto2 = {
	nombre: 'Celular Samsun Galaxy S10 Edge',
	precio: 800
}

// definir otro producto mas
const producto3 = {
	nombre: 'Teclado RGB',
	precio: 200
}

// definir otro producto mas
const producto4 = {
	nombre: 'Teclado RGB',
	precio: 200
}

// definir otro producto mas
const producto5 = {
	nombre: 'Teclado RGB',
	precio: 200
}

// agregando los productos al arreglo
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);
carrito.push(producto5);

// eliminar ultimo elemento del arreglo
carrito.pop(); // esta propiedad elimina el ultimo elemento del arreglo

// eliminar el primer elemento del arreglo
carrito.shift(); // esta propiedad elimina el primer elemento del arreglo

// eliminar cierto elemento de un arreglo dependiendo de su posicion
carrito.splice(1, 1); // eliminara solo el primer elemento del arreglo

// mostrando el arreglo carrito
console.log(carrito);
