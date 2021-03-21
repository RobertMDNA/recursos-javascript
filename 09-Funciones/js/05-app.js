// parametros y argumentos en la funciones
// la utilidad de los parametros y argumentos es poder reciclar funciones con distintos datos
function sumar(a, b){ // funcion sumar con dos parametros (a, b) que muestra la suma de dos valores por consola
    console.log(a + b); // esta funcion seria dinamica, ya que sumaria los valores recibidos al llamar dicha funcion
}

sumar(2, 3); // llamada a la funcion con dos argumentos (2, 3) para observar el resultado de la suma por consola
sumar(10, 5);
sumar(2,2);

function saludar(nombre, apellido){ // funcion saludar con dos parametros (nombre, apellido) para mostrar un saludo con esos datos
    console.log(`Hola, ${nombre} ${apellido}`);
}

saludar('Robert', 'Medina'); // llamada a la funcion con los argumentos del nombre y apellido de la persona