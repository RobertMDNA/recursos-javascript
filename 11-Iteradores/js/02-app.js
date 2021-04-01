// break y continue en un foor loop
for (let i = 0; i < 10; i++) {
    console.log(`Numero ${i}`); 
}

console.log('\n');

// crear un foor loop que al detectar el elemento numero 5, detenga su ejecucion
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        // esta condicion comprobara por cada valor de i, cuando i sea igual a 5 se ejecutara lo siguiente ->
        console.log(i); // -> primero se imprimira el valor de i que es 5 en dicho momento
        break; // -> despues se detendra la ejecucion del codigo
    }

    // por lo que cuando i sea igual a 5, esta linea de codigo ya no se ejecutara
    console.log(`Numero ${i}`);
}

console.log('\n');

// crear un foor loop que al llegar al numero 5, en lugar de mostrar dicho numero lo muestre como string
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        // esta otra condicion comprobara por cada valor de i, cuando i sea igual a 5 se ejecutara lo siguiente ->
        console.log('cinco'); // -> al ser i = 5, se imprimira cinco en una cadena de texto
        continue; // despues se saltara a la siguiente linea de codigo
    }   

    // la cual seria esta,
    console.log(`Numero ${i}`);
}

// por lo tanto, break finaliza la ejecucion del codigo
// mientras que, continue salta a la siguiente linea para continuar

console.log('\n');

// ejemplo mas real en el que podemos usar continue
// array de objetos
const carrito = [
	{nombre: 'Monitor 24"', precio: 200},
	{nombre: 'Teclado RGB', precio: 300},
	{nombre: 'Bocina Bluethoot', precio: 400, descuento: true},
	{nombre: 'Mouse Inalambrico', precio: 600},
	{nombre: 'Mouse Alambrico', precio: 400},
	{nombre: 'Laptop HP Black', precio: 400}
];

// for loop que nos permitira recorrer un arreglo y decirlo a un usuario que elemento tiene descuento
for (let i = 0; i < carrito.length; i++) { // se establece el arreglo, el cual se recorrera hasta que i sea menor al tamaño del arreglo
    if (carrito[i].descuento) { // se comprueba que el elemento del carrito en dicha posicion tenga un descuento
        console.log(`El producto ${carrito[i].nombre} tiene un descuento del 10%`); // si tiene descuento, se imprime lo siguiente
        continue; // seguido de eso, se aplica un continue para saltar a la siguiente linea de codigo
    }

    console.log(`producto: ${carrito[i].nombre}`);
}