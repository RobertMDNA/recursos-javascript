// consejos para escribir codigo mucho mejor
const autenticado = true;

if (autenticado === true) {
    console.log('Si puedes ver netflix');
}else{
    console.log('No no puedes verlo');
}

// un mejor forma de comprobar es sin igualar la condicion a true, ya que en este caso. es true por default
if (autenticado) {
    console.log('Si puedes ver netflix');   
}else{
    console.log('No puedes ver netflix');
}

// otra forma de comparar con un if corto es con el operador ternario
console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');