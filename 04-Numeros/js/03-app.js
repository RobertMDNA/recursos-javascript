// el objeto math en javascript

// propiedad pi
console.log('Pi:',Math.PI);

// propiedad round, para redondear al numero mas cercano
console.log('Round;',Math.round(2.6)); // redondeara a su numero mas cercano que es 3
console.log('Round:',Math.round(2.4)); // redondeara a su numero mas cercano que en este caso es 2

// propiedad ceil, para redondear siempre hacia arriba
console.log('Ceil:',Math.ceil(2.1)); // aunque el numero este mas cerca al dos, redondeara a 3

// propiedad floor, permite redondear siempre hacia abajo
console.log('Floor',Math.floor(2.9)); // aunque el numero este mas cerca al tres, redondeara a 2

// propiedad sqrt, permite sacar la raiz cuadrada de un numero
console.log('Sqrt:',Math.sqrt(4)); // obtendremos la raiz cuadrada de 4

// propiedad abs, permite transformar cualquier valor negativo a positivo
console.log('Abs:',Math.abs(-20)); // el valor absoluto de -20 sera 20 positivo

// propiedad pow, permite elevar un numero a cualquier potencia
console.log('Pow:',Math.pow(1,2)); // numero a elevar, potencia

// propiedad min, permite encontrar el valor minimo, entre una serie de numeros
console.log('Min:',Math.min(2,20,30,19,8,0)); // devolvera 0, ya que es el menor entre todos ellos

// propiedad max, permite encontrar el valor maximo, entre una serie de numeros
console.log('Max:',Math.max(2,20,30,19,8,0)); // devolvera 30, ya que es el mayor entre todos ellos

// propiedad random, permite obtener un numero aleatorio entre cero y uno
console.log('Random',Math.random());