// comparando valores en javascript
const num1 = 20;
const num2 = '20';
const num3 = 30;

// comparando que dos valores sean iguales (==)
console.log(num1 == num3); // si el num1 es igual al num2 devuelve true, en caso contrario devuelve false
console.log(num1 == num2); // como ambos valores son iguales mostrara true

// comparador estricto para comparar dos valores (===)
console.log(num1 === num2); // si ambos valores son iguales y el tipo de dato es igual sera true, sino false

// revisando el tipo de dato de todas las variables
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);

// haciendo una comparacion estricta asegurandonos de que num1 sea igual a num2 en todos los aspectos
console.log(num1 === Number(num2)); // como se parseo el num2, si sera posible que esto sea true

// operador diferente de (!=)
const password = 'robertmdna';
const password2 = 'Robertmdna';

console.log(password != password2); // como si son diferentes mostrara true
console.log(num1 != num2); // en este ejemplo muestra false, ya que js comprueba solo su valor, por lo que no son diferentes

// para poder comparar correctamente tenemos el operador de diferencia estricta
console.log(num1 !== num2); // mostrara true, ya que si son diferentes por completo