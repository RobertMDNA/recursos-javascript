// metodos para trabajar numeros
const num1 = '20';
const num2 = '20.2';
const num3 = 'uno';
const num4 = 20;

// transformando strings a numeros
// transformando numeros enteros
console.log('Numero entero:',Number.parseInt(num1));

// transformando numeros decimales
console.log('Numero decimal:',Number.parseFloat(num2));

// transformando algo que no es nu numero como tal
console.log('Not a number:',Number.parseInt(num3));

// revisando si un numero es entero
console.log('Es entero:',Number.isInteger(num1)); // true si es un numero, false si no lo es