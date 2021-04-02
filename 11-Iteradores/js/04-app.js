// iterador o ciclo while en js
let i = 0; // inicializamos una variable i en 0

while(i < 10){ // declaramos nuestro iterador while con la condicion de que se ejecutara hasta que i sea menor a 10
    console.log(`Numero ${i}`); // mostramos por pantalla el valor de i en cada iteracion

    i++; // incrementamos i en uno en cada vuelta, ya que sin esto el ciclo siempre se repetiria
}

console.log('\n');

// ejercicio - revisar entre un numero de elementos cuales son pares y cuales impares con un ciclo while
while (i < 100) {
    if (i % 2 === 0) {
        console.log(`${i} es par`);
    }else{
        console.log(`${i} es impar`);
    }

    i++;
}