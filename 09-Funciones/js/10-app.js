// arrow functions
// las arrow functions son otra forma de declarar funciones
// su sintaxis es mas corta que las funciones tradicionales
const aprendiendo = function () { 
    // funcion tradicional en javascript
    console.log('Aprendiendo JavaScript');
}

// transformando nuestra funcion tradicional en un arrow function
const aprendiendo2 = () => { 
    // arrow function en javascript
    console.log('Aprendiendo JavaScript Moderno');
}

// cuando se tiene un arrow function de una sola linea, se pueden evitar las brackets y de igual forma funcionara
const aprendiendo3 = () => console.log('Aprendiendo JavaScript Moderno 2021');

// tambien en un arrow function por implicito se puede obviar el return
const aprendiendo4 = () => 'Aprendiendo JavaScript Moderno 2021.2.0'; // ahora aprendiendo4 tiene el valor string

// llamado a la funcion aprendiendo
aprendiendo();

// llamando a la arrow function aprendiendo 2
aprendiendo2();

// llamando a la arrow function aprendiendo 3
aprendiendo3();

// llamando a la arrow function aprendiendo 4
console.log(aprendiendo4());