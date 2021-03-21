// diferencias entre function expression y function declaration
// function declaration
function sumar(){ 
    console.log(2+2);
}

sumar(); // llamada a la funcion - muestra como resultado la suma de 2 + 2

// function expression
const sumar2 = function(){ 
    console.log(3+3);
}

sumar2(); // llamada a la funcion - muestra como resultado la suma de 3 + 3

// la principal diferencia entre ambos tipos de declaraciones de funciones es la siguiente
// - si llamaramos a la funcion antes de su creacion - una function declaration si funcionaria
// - mientras que una function expression no, ya que dara un error de que no se puede usar sin antes inicializarse dicha funcion