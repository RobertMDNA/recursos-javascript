// parametros por default
function saludar(nombre, apellido = 'sin apellido definido'){
    console.log(`Hola, ${nombre} ${apellido}`);
}

saludar('Roberto', 'Medina'); // llamando a la funcion con dos argumentos de tipo string
saludar('Robert'); // llamada a la funcion con un argumento de tipo string, por lo que se mostrara el default de apellido