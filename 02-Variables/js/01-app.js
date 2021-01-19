// Todo sobre las variables con "var"
/* La sentencia "var" declara una variable, opcionalmente inicializada con un valor 
 * 
 * DESCRIPCION
 * Las declaraciones de variables, donde sea que ocurran, son procesadas antes de que cualquier
 * otro codigo ocurra.
 */

// declarando y asignando valor a una variable creada con "var"
var producto = 'Monitor 24 Pulgadas'; // var nombreDeVariable = 'valorAsignado'
console.log(producto); // por consola se mostrara el valor de la variable producto

// una de las ventajas de las variables es que se puede reasignar nuevos valores
producto = 'Monitor 19 Pulgadas';
console.log(producto); // por consola se mostrara el nuevo valor de la variable, ambos como cadenas de texto

// ATENCION
// JavaScript es un lenguaje de tipeado dinamico
// esto quiere decir, que no hay que declarar el tipo de dato como tal, JavaScript lo hace por si solo
// -------------------------------------------------------------------------------------------------------------
// reasignando un nuevo valor al producto
producto = 20; // gracias al tipeado dinamico de JavaScript esto no muestra ningun error como en otros lenguajes
console.log(producto); // mostrara el nuevo valor de producto por consola

// ATENCION
// Otra caracteristica de las variables, es que se puede declarar una variable y asignarle su valor despues
// -------------------------------------------------------------------------------------------------------------
// declarando variable vacia, para despues asignarle su valor
var disponible; // variable creada vacia
disponible = true; // se le asigna el valor de "true" a la variable disponible en otra linea
disponible = false; // ahora se le asigna el valor de "false" a la variable disponible en otra linea

// ATENCION
// JavaScript tambien permite declarar multiples variables de la siguiente forma
var categoria = 'Computadores',
    calificacion = 4,
    marca = 'Samsung'; // de esta forma javascript declara las distintas variables solo con el uso de un "var"

// REGLAS QUE HAY QUE SEGUIR PARA DECLARAR VARIABLES
// Una variable puede contener letras, guiones bajos o numeros pero no pueden iniciar con un numero o caracteres extraños
// EJEMPLO --------------------------------------------------------------------------------------------------------------
var 99Dias; // eso seria un error de sintaxis
var dias99; // podrias declarar en su caso la variable de la siguiente forma
// OTRO EJEMPLO ---------------------------------------------------------------------------------------------------------
var 01_; // esto tambien seria un error de sintaxis
var _01; // en su caso, puedes declararlo de esta forma

// ESTILOS PARA NOMBRAR VARIABLES CON MAS DE UNA PALABRA
var nombreProducto; // camelCase - la forma mas conocida de declarar variables en javaScript
var nombre_producto; // underscore - tambien conocida como snake, mas utilizada en otros lenguajes como php