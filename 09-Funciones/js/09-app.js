// añadir funciones en un objeto
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción #${id}`);
    },
    pausar: function(id){
        console.log(`Pausan canción #${id}`);
    },
    crearPlayList: function(namePlayList){
        console.log(`Se ha creado la Play List ${namePlayList}`);
    },
    reproducirPlayList: function(namePlayList){
        console.log(`Reproduciendo La Play List ${namePlayList}`);
    }
}

// llamando a la funcion reproducir dentro de nuestro objeto reproductor
reproductor.reproducir(30);
reproductor.reproducir(20);

// llamando a la funcion pausar dentro de nuestro objeto reproductor
reproductor.pausar(30);

// agregando una nueva propiedad funcion dentro del objeto reproductor
reproductor.borrar = function(id){
    console.log(`Eliminando cancion #${id}`);
}

// llamando a la funcion borrar dentro de nuestro objeto reproductor
reproductor.borrar(20);

// llamando a la funcion que crea una playList con su nombre
reproductor.crearPlayList('Exitos 2021');

// llamando a la funcion que reproduce dicha playList
reproductor.reproducirPlayList('Exitos 2021');