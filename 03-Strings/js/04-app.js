// String Methods - Eliminar espacios en blanco de un string
const producto = '         Monitor 20"        '; // variable producto con una cadena de texto como valor

console.log(producto); // mostrando el valor de producto por consola teniendo demasiados espacios en blanco

// EXISTEN DIFERENTES METODOS PARA ELIMINAR LOS ESPACIOS EN BLANCOS

// Eliminar espacios en blanco del inicio de la cadena
console.log(producto.trimStart()); // el metodo trimStar(), permitira eliminar espacios en blanco del principio

// Eliminar espacios en blanco del final de la cadena
console.log(producto.trimEnd()); // el metodo trimEnd(), permitira eliminar espacios en blanco del final

// JavaScript tambien nos permite encadenar metodos
console.log(producto.trimStart().trimEnd()); // esto eliminara los espacios en blanco del final y del inicio

// Existe otra forma de eliminar los espacios en blanco en javascript de una forma mas sencilla
console.log(producto.trim()); // el metodo trim, eliminara los espacios en blanco del inicio y del final de la cadena