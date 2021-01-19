// crear strings en javascript
// El objeto string se utiliza para representar y manipular una secuencia de caracteres
/* DESCRIPCION ------------------------------------------------------------------------
 * Las cadenas son utiles para almacenar datos que se pueden representar en formato de texto
 * Algunos ejemplos de cadenas de texto son, el nombre de un usuario, el nombre de un producto, una categoria etc...
 */
// ATENCION
// Existen tres formas de crear una cadena de texto
// La primera es la forma primitiva y mas comun de hacerlo
const producto = 'Monitor 20"'; // esto ya es una cadena de texto de tipo primitivo
console.log(producto);

// La segunda forma es hacerlo por medio del metodo String()
const producto2 = String('Monitor 24"'); // esto tambien es una cadena de texto
console.log(producto2);

// La tercera es por medio de una instancia del objeto String()
// Este objeto se encarga de separar cada caracter en un elemento del objeto
const producto3 = new String('Monitor 32"'); // esto tambien es considerado como una cadena de texto, aunque menos comun
console.log(producto3);