// arroe functions en el reproductor de musica
// se reemplazaron las funciones tradicionales por arrow functions en el reproductor de musica
const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción #${id}`),
    pausar: id => console.log(`Pausan canción #${id}`),
    crearPlayList: namePlayList => console.log(`Se ha creado la Play List ${namePlayList}`),
    reproducirPlayList: namePlayList => console.log(`Reproduciendo La Play List ${namePlayList}`),

    set anadirNuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`Reproduciendo ${this.cancion}`);
    }
}

reproductor.anadirNuevaCancion = 'Enter Sadman'; // agregando una nueva cancion con set
reproductor.obtenerCancion; // obteniendo la cancion con get

reproductor.reproducir(20);
reproductor.pausar(22);
reproductor.crearPlayList(18);