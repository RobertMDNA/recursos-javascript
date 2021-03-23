// comunicacion entre funciones
// llamada a la funcion principal
iniciarApp();

function iniciarApp(){
    // funcion que inicializa todas las demas funciones
    console.log('Inicializando valores predeterminados...');

    // llamando a la funcion procesando dentro de nuestra funcion principal
    procesando();
}

function procesando() {
    // funcion encargada de procesar datos
    console.log('Procesando datos...');

    // llamando a la funcion usuarioAutenticado dentro de nuestra funcion procesando
    usuarioAutenticado('Roberto','Medina'); // funcion usuarioAutenticado que toma un string como argumento
}

function usuarioAutenticado(nombre = 'Desconocido', apellido = '') {
    // funcion encargada de autenticar usuarios
    console.log('Autenticando usuario, por favor espere un momento...');
    console.log('Usuario autenticado correctamente');
    console.log(`Bienvenido ${nombre} ${apellido}!`);
}


