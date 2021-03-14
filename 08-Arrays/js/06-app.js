// crear un nuevo arreglo con spread operator
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

// agregando los productos de carrito en una nueva variable con copia
let resultado = [...carrito, producto, producto2];
resultado = [producto3, ...resultado];

// mostrando el array carrito
console.log(carrito);

// mostrando el nuevo array
console.log(resultado);