// comprobano que dos condiciones se cumplan con el operador &&
const usuario = true;
const puedePagar = false;

// al utilizar el operador && es importante tener en cuenta que todas las condiciones a revisar deben de ser verdaderas
// en caso de que al menos una sea false, toda la condicion sera false
if (usuario && puedePagar) {
    // si es el usuario, se ejecutara este codigo
    console.log('Si eres el usuario correcto & si puedes pagar');
}else{
    // en caso de que no sea el usuario, se ejecutara este siguiente codigos
    console.log('No, no puedes comprar');
}