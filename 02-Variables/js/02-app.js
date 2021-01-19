// Todo sobre las variables con "let"
// La instruccion "let" declara una variable de alcance local con ambito de bloque (block scope).
// La cual opcionalmente puede ser inicializada con un valor
/* DESCRIPCION 
 * "let" permite declarar variables limitando su alcance (scope) al bloque, declaración o expresion
 * donde se esta usando. A diferencia de la palabra clave reservada "var" la cual define una variable global local
 * en una funcion sin importar el ambito del bloque. 
 * La otra diferencia entre "var" y "let" es que este ultimo se inicializa a un valor solo cuando su analizador
 * lo evalua.
 * Al igual que "const", "let" no crea propiedades del objeto se declara globalmente (en el alcance más alto). 
 */

/* ATENCION -------
 * Hoy en día se recomienda solo utilizar const o let, ya que "var" esta siendo cambiada por let.
 * Ya que de esta forma se evita tener problemas en tus programas
 * -----------------------------------------------------------------------------------------------------------------
 * Todo lo anterior visto en la seccion de la palabra reservada "var" es aplicado para "let"
 */

//  let - permite crear la variable y asignar el valor
let producto = 'Tablet';

// reasignar el valor de la variable
producto = 'Monitor de 32"';

// de igual forma, gracias al tipeado dinamico, podemos pasar de un tipo de dato a otro sin que javascript mueste algun error
producto = 20;

console.log(producto);

// let - tambien permite crear la variable y asignar el valor despues en otra linea
let precio; // se crea la variable precio
precio = 2000; // se le asigna el valor de 2000 a la variable precio