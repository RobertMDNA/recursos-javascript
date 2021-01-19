// concatenar strings y template string
const producto = 'Monitor 20" '; // variable producto con una cadena de texto como valor
const precio = '30 USD';

// El metodo "concat()" combina dos o mas cadenas de texto y devuelve una cadena de texto nueva
/* DESCRIPCION -----------------------------------------------------------------------------------------------------------------
 * La funcion concat() concatena los argumentos de tipo texto con la cadena de sobre la que se llama a la funcion y devuelve una nueva cadena de texto. Los cambios en la cadena original o la cadena devuelta no afectan al otro.
 * - Si los argumentos no son de tipo texto, son convertidos a textos antes de ser concatenados
 */
// concatenando dos variables
console.log(producto.concat(precio)); // se mostrara una nueva cadena con el valor de 'Monitor 20"30 USD'

// concatenando variables y strings
console.log(producto.concat('en descuento')); // se mostrara una nueva cadena con el valor de 'Monitor 20" en descuento'

// OTRAS FORMAS DE CONCATENAR
console.log(producto + precio); // Al ser strings javascript los concatena en lugar de sumarlos

// Template Strings o Template Literals para concatenar
console.log(`El producto ${producto}tiene un precio de $${precio}`);