// switch case para evaluar multiples condiciones
const metodoPago = 'Tarjeta';

// revisando el metodo de pago con el que pago
switch (metodoPago) {
    case 'Efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'Tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'Cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log(`Lo siento, por el momento no podemos procesar pagos con ${metodoPago}`);
        break;
}