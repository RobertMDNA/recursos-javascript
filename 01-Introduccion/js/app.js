// archivo externo a js
const nombre = prompt('¿Cuál es tu nombre?'); // se crea una variable que recibe un nombre
document.querySelector('.contenido').innerHTML = `${nombre}`; // se inserta el nombre en el html