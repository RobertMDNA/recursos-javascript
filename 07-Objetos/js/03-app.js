// agregar o eliminar propiedades a un objeto
const producto = {
    nombre: 'Monitor 24"', // key = nombre: 'valor de la propiedad'
    precio: 300,
    disponible: true
}

// claro que puedes agregar la nueva propiedad directamente en tu objeto, pero tambien si quieres puedes agregar tu nueva propiedad durante la ejecucion del proyecto

// agregando nuevas propiedades al objeto
producto.imagen = 'imagen.jpg'; // de esta forma accedemos al objeto y con el punto agregamos la nueva propiedad con su nuevo valor

// eliminando una propiedad del objeto
delete producto.disponible; // de esta forma eliminariamos la propiedad disponible del producto

// mostrando el objeto completo
console.log(producto);