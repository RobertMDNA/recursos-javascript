// ejemplo de varias funciones que se pasan parametros
function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2,4); // llamada a la funcion sumar con dos argumentos

console.log(resultado);

// otro ejemplo mas complejo
let total = 0; // iniciamos la variable total en cero

function agregarCarrito(precio) {
    // funcion agregarCarrito que recibe como parametro un precio
    return total += precio; // devuelve el resultado de total = total + precio
}

function calcularImpuesto(total) {
    // funcion calcularImpuesto que recibe como parametro un total, el cual permite calcular el impuesto en base a un fijo
    return total * 1.16;
}

// ahora a la varibale total se le asigna dicha funcion agregarCarrito con un argumento de 200
total = agregarCarrito(200);

console.log(calcularImpuesto(total)); // esto con la finalidad de que al mostrar por pantalla se visualice el valor final de dicha variable