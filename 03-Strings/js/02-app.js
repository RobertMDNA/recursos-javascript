// String Methods - includes & length
const producto = 'Monitor 20"'; // variable producto con una cadena de texto como valor
const precio = ''; // variable precio con una cadena vacia

// Propiedad "length" de un objeto String representa la longitud de una cadena, en unidades de codigo UTF-16.
/* DESCRIPCION ----------------------------------------------------------------------------------------------------------------- 
 * Esta propiedad devuelve el numero de caracteres de una cadena, UTF-16. El formato usado por javascript.
 * Usa 16-bit para representar los caracteres mas comunes, pero necesita usar dos caracteres para otros menos usados,
 * asi que es posible que el valor devuelto por length no corresponda al numero de caracteres de la cadena.
 * 
 * - ATENCION -
 * Para una cadena vacia "length" es = 0
 * La propiedad "static String.length" es = 1
 */
console.log('La cadena: '+producto+' tiene un total de: '+producto.length+' caracteres'); // esto mostrara el total de caracteres del producto
console.log('La cadena de: '+precio+' tiene un total de: '+precio.length+' caracteres'); // 0 para una cadena vacia


// Metodo "indexOf()" devuelve el indice, dentro del objeto String que realiza la llamada de la primera ocurrencia del valor especificado, comenzando la busqueda desde "indiceDesde"; o -1 si no se encuentra dicho valor
/* DESCRIPCION -----------------------------------------------------------------------------------------------------------------
 * Los caracteres de una cadena se indexan de izquierda a derecha. El indice del primer caracter es 0 y el 
 * indice del ultimo caracter es "nombreCadena.length - 1"
 * - ATENCION -
 * Este metodo es sentible a mayusculas y minusculas
 */
console.log(producto.indexOf('monitor')); // retornara -1 ya que la palabra "monitor" no existe dentro de la cadena
console.log(producto.indexOf('Monitor')); // retornara la primera posicion encontrada de la palabra "Monitor"


// Metodo "includes()" determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo "true" o "false" segun corresponda
/* DESCRIPCION -----------------------------------------------------------------------------------------------------------------
 * Este metodo permite determinar si una cadena de texto se encuentra incluida dentro de la otra
 * Este metodo tambien es sensible a mayusculas y minusculas
 */
console.log(producto.includes('Tablet')); // buscara la palabra "Tablet" dentro de la cadena de producto, no existe = false
console.log(producto.includes('Monitor')); // buscara la palabra "Monitor" dentro de la cadena producto, existe = true