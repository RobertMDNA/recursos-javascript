// funciones en objetos y accediendo a sus valores & uso de la palabra reservada "this"
const producto = {
    nombre: 'Monitor 24"', // key = nombre: 'valor de la propiedad'
    precio: 300,
    disponible: true,
    mostrarInfo: function () { 
        // esto es una funcion dentro de un objeto
        // nosotros al acceder a la propiedad nombre y precio asi tal cual, la funcion las tomara como no definidas. Por lo que esto dara un error
        // para poder acceder a las propiedades de un objeto sin que muestre este error, hay que hacer uso de "this"
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio} `);
    }
}

// llamando a la funcion dentro del objeto
producto.mostrarInfo();