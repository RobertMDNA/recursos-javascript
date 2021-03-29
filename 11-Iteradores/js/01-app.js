// foor loop
for (let i = 0; i < 10; i++) {
    // este foor loop se ejecutara hasta que i sea menor a 10, en este caso. Llegara hasta 9
    console.log(`Numero ${i}`); 
}

console.log('\n');

for (let i = 0; i < 10; i+=2) {
    // este for loop al igual que el otro, finalizara hasta llegar a 8. Porque va incrementando de 2 en 2
    console.log(`Numero ${i}`);
}

console.log('\n');

// Ejercicio, en un foor loop como identicas los numeros que son pares y los que son nones
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(`${i} es numero par`);
    }else{
        console.log(`${i} es numero impar`);
    }
}

console.log('\n');

// array de objetos
const carrito = [
	{nombre: 'Monitor 24"', precio: 200},
	{nombre: 'Teclado RGB', precio: 300},
	{nombre: 'Bocina Bluethoot', precio: 400},
	{nombre: 'Mouse Inalambrico', precio: 600},
	{nombre: 'Mouse Alambrico', precio: 400},
	{nombre: 'Laptop HP Black', precio: 400}
];

// recorriendo un arreglo de objetos con un foor loop
for (let i = 0; i < carrito.length; i++) {
    console.log(`Producto: ${carrito[i].nombre}\tPrecio: $${carrito[i].precio}`);
}