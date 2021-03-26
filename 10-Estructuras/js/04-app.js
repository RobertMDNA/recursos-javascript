// mayor o igual y else if
const dinero = 300;
const totalPagar = 300;
const tarjeta = true;
const cheque = true;

// revisando por multiples condiciones
if (dinero >= totalPagar) {
    console.log('Si puedes pagar');
}else if(cheque){
    console.log('Si puedo pagar porque tengo cheque');
}else if(tarjeta){
    console.log('Si puedo pagar porque tengo la tarjeta');
}else{
    console.log('No puedes pagar');
}