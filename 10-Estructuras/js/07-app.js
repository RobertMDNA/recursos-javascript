// comprobano que al menos una de mas de dos condiciones se cumpla con el operador OR ||
const usuario = true;
const puedePagar = false;

// es importante tener en cuenta, que al usar el operador de OR este suele verificar entre dos o mas condiciones que al menos una se cumpla
// es decir, no importa cuantas sean false, mientras haya una con el valor de true. Se validara la accion como verdadera
if (usuario || puedePagar) {
    // si es el usuario, se ejecutara este codigo
    console.log('Si eres el usuario correcto & si puedes pagar');
}else{
    // en caso de que no sea el usuario, se ejecutara este siguiente codigos
    console.log('No, no puedes comprar');
}