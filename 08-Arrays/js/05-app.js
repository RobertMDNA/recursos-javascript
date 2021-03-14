// añadir nuevos elementos al inicio y al final del arreglo
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']; // arreglo de strings


// metodo para agregar datos al final del arreglo
meses.push('Julio'); // agregamos el valor de Abril al final del arreglo
meses.push('Agosto'); // agregamos el valor de Agosto al final del arreglo

// mostrando el arreglo
console.table(meses);

// simulando un carrito de compras
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

// agregando el objeto producto al arreglo
carrito.push(producto); // este push agregara el producto al arreglo

// agregando el objeto producto dos al arreglo
carrito.push(producto2); // este push agregara el producto2 al arreglo

// agregando el objeto producto3 al inicio del arreglo
carrito.unshift(producto3); // este unshift agregara el producto3 al inicio del arreglo

// mostrando el arreglo carrito
console.log(carrito);