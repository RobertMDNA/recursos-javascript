// comparacion de null & undefined
// undefined
let numero;

console.log(numero); // obtenemos undefined - porque la variable existe, pero no esta definida
console.log(typeof numero);

// si nosotros le asignaramos un valor y mostraramos en pantalla, dejara de ser undefined
// numero = 5;

console.log(numero); // ahora numero ya no es undefined

// null
let numero2 = null;

console.log(numero2); // mostrara null, ya que nosotros le dimos ese valor
console.log(typeof numero2); // js lo considera como un object

// comparando si ambos valores son iguales
console.log(numero == numero2); // devuelve si, ya que para js quiere decir que no existe valor en ambos casos. Por lo que devuelve true

// para poder comparar correctamentehacemos uso del operador estricto
console.log(numero === numero2); // devolvera false, ya que no son iguales