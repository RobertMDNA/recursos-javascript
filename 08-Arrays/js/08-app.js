// destructuring de arrays
const numeros = [10, 20, 30, 40, 50];

// aplicando destrcuturing al arreglo de numeros
const [primero, segundo, tercero] = numeros; // con la variable primero accedo al pimer valor del array
const [, , ,cuarto] = numeros; // destructuring para mostrar solo las propiedades que necesitamos
const [primero2, segundo2, ...newArray] = numeros; // destructuring para mostrar primero y segundo elemento y el tercero convertirlo en un array

console.log(numeros); // mostrando el arreglo completo
console.log(primero); // mostrando el valor de la variable primero
console.log(segundo); // mostrando el valor de la variable segundo
console.log(tercero); // mostrando el valor de la variable tercero
console.log(cuarto); // mostrando el valor de la variable cuarto
console.log(newArray); // mostrando el valor del new array