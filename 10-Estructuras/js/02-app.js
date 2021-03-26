// operador estricto en javascript
const puntaje = 1000;

if (puntaje === 1000) {
    // este es un condicional if que compara ambos valores estrictamente
    // si el valor a comprobar es igual en tipo de dato y sintaxis, se ejcutara este bloque de instruciones que serian las verdaderas
    console.log('Si son iguales');
}else{
    // en caso de no ser del mismo tipo de dato pero si en sintaxis, se ejecutara lo siguiente
    console.log('No son iguales');
}

// comprobando si un dato es diferente a otro
if (puntaje != 1000) { // asi como existe un operador de igual estricto, tambien existe el diferente estricto !==
    // en caso de que puntaje sea diferente de 1000, se ejecutara este bloque de codigo
    console.log('Si es diferente');
}else{
    // en caso de que no sea diferente, se mostrara este bloque de codigo
    console.log('No son diferentes');
}