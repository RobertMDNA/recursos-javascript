// ventajas de las arrow functions
// funcion tradicional con parametros
const aprendiendo = function (aprendiendo) { 
    // funcion tradicional en javascript
    console.log(`Aprendiendo ${aprendiendo}`);
}

// en un arrow function los parametros se añaden en el parentesis
const aprendiendo2 = (tecnologia) => { 
    // arrow function en javascript
    console.log(`Aprendiendo ${tecnologia}`);
}

// en un arrow function si solo se pasa un parametro, los parentesis son opcionales
const aprendiendo3 = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

// llamando a la funcion aprendiendo y pasandole un argumento
aprendiendo('JavaScript');

// llamando a la arrow function aprendiendo2 y pasandole un argumento
aprendiendo2('JavaScript Moderno');

// llamando a la arrow function aprendiendo3 y pasandole un argumento
aprendiendo3('JavaScript Moderno 2021');