// String Methods - Recortar, remplazar
const producto = 'Monitor 20 Pulgadas';

// Metodo replace() - permite remplazar un texto de una cadena por otro texto
console.log(producto); // cadena normal, sin alteraciones
console.log(producto.replace(' Pulgadas', '"')); // parametro a buscar para remplazo, nuevo valor de la cadena
console.log(producto.replace('Monitor', 'Monitor Curvo')); // remplazamos Monitor por, Monitor Curvo

// Metodo slice() - extrae una seccion de una cadena y devuelve una cadena nueva
console.log(producto.slice(0,10)); // posicion desde donde empieza, posicion donde terminara -1
console.log(producto.slice(8)); // si solo se pasa un parametro, js ira desde la posicion 8 hasta el final de la cadena
console.log(producto.slice(2,1)); // si el primer parametro es mayor al segundo, JavaScript no hara nada

// Metodo subString() - devuelve un subconjunto de un objeto String
console.log(producto.substring(0,10)); // hara lo mismo que slice
console.log(producto.substring(2,0)); // js invertira los valores en caso del primero ser mayor al segundo

// Metodo charAt() - devuelve en una nueva cadena el caracter señalado por el indice
console.log(producto.charAt(0)); // devolvera el caracter en la posicion 0