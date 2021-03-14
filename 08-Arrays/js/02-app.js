// accediendo a los valores de un arreglo
const numeros = [10, 20, 30, 40, 50, [1,2,3]]; // arreglo de numeros

// mostrando el array
console.log(numeros);
console.table(numeros);

// accediendo al valor en base a su indice
console.log(numeros[2]); // mostrara el valor de 30 del arreglo
console.log(numeros[0]); // mostrara el valor de 10 del arreglo
console.log(numeros[20]); // en caso de acceder a una posicion que no existe, javascript solo mostrara "undefined"

// accediendo al valor de un arreglo dentro de otro arreglo
console.log(numeros[5][1]); // estamos accediendo al arreglo que se encuentra en la posicion 5 y luego en ese arreglo accedemos a su posicion 1