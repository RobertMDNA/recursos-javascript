// Todo sobre las variables con "const"
// Las variables constantes representan un ambito de bloque (block scope) tal y como lo hacen las variables definidas
// usando la instruccion let, con la particularidad de que el valor de una constante no puede cambiarse
// a traves de la reasignacion. Las constantes no se pueden redeclarar.
/* DESCIPCION -------------------------------------------------------------------------------------------------------------
 * Esta declaración crea una constante cuyo alcance puede ser global o local para el bloque en el que se declara
 * Es necesario inicializar la constante, es decir, se debe especificar su valor en la misma sentencia en la que se declara
 * Lo que tiene sentido, dado que no se puede cambiar posteriormente.
 * 
 * La declaracion de una constante crea una referencia de solo lectura. No significa que el valor sea inmutable, sino
 * que el identificador de variable no puede ser reasignado, por lo tanto, en el caso de que la asignación a la constante
 * sea un objeto, el objeto si puede ser alterado
 * 
 * Una constante no puede compartir su nombre con una función o variable en el mismo ámbito.
 */

/* ATENCION ----------------------------------------------------------------------------------------------------------------
 * Todo lo visto en las secciones anteriores de variables, es aplicado tambien para const.
 * Tanto las reglas para declarar variables, como la reasignación de las mismas etc...
 * Con la unica diferencia de que una variable constante siempre debe de estar iniciaizada o asignada a un valor
 */
const precio; // esto es una constante sin valor, por lo que al mostrar por pantalla dara error

console.log(precio); // mostrando la variable precio sin valor, dara error

// tampoco se puede reasignar su valor
const producto = 'Tablet'; // esto es correcto ya que la variable const esta inicializada con su valor

producto = 'Monitor'; // esto es erroeno, ya que el valor de producto no puede cambiar

console.log(producto);