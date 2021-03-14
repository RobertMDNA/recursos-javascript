// recorrer un arreglo
const numeros = [10, 20, 30, 40, 50, [1,2,3]]; // arreglo de numeros
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']; // arreglo de strings

// mostrando arreglo por consola
console.table(meses); // muestra el arreglo meses por consola

// para recorrer un array es primero conocer cuanto mide el arreglo
// para ello podemos hacer uso de la propiedad ""
console.log(meses.length); // propiedad length muestra el tamaño total del array

// recorriendo un array con un foorloop
for (var i = 0; i < meses.length; i++) {
	console.log(meses[i]); // recorremos el arreglo con el valor de la posicion i en cada iteracion
}
