// iterador o ciclo do while
// la caracteristica principal del do while es que primero ejecutara el codigo y despues comprobara la condicion
// por lo que esto implica que nuestro codigo se ejecute al menos una vez en caso de que la condicion sea false
let i = 0; // inicializamos variable i en cero

do { // sentencia do while, a partir de ahora nuestro codigo empezara a ejecutarse
    console.log(i);

    i++; // al igual que en un ciclo while, tambien se debe de incrementar i en uno en cada iteracion
} while (i < 100);