// String Methods - Repeat and Split
const producto = 'Monitor 20 Pulgadas';
const texto = ' En Promocion';

// metodo repeat() - construye y devuelve una nueva cadena que contiene el numero especificado de copias de la cadena en la cual fue llamada, concatenados
console.log(producto, texto.repeat(3)); // repeat repetira 3 veces el texto "En promocion"

// metodo split() - divide un objeto de tipo string en un array(vector) de cadenas mediante la sepacion de la cadena en subcadenas
console.log(producto.split(' ')); // esto devolvera un arreglo de todas las palabras del texto divididas por espacios
