// agregar nuevos valores a un array de la forma tradicional
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']; // arreglo de strings

// si yo accedo al arreglo en la posicion cero y le asigno un nuevo valor, no signica que se agregue. Se reescribe
meses[0] = 'Nuevo Mes';

// pero si mi arreglo tiene n cantidad de elementos puedo agregar uno nuevo
meses[7] = 'Julio'; // esto agregara el mes de julio al arreglo


// imprimiendo los valores por pantalla
console.table(meses);