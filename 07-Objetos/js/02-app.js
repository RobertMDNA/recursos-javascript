// accediendo a los valores de un objeto
const producto = {
    nombre: 'Monitor 24"', // key = nombre: 'valor de la propiedad'
    precio: 300,
    disponible: true
}

// mostrando el objeto completo por consola
console.log(producto);

// los objetos tienen algo llamado, sintaxis de punto para poder acceder a cada uno de sus valores
console.log(producto.nombre); // de esta forma accedemos al objeto, mas especifico a la propiedad nombre de dicho objeto

// otra forma de acceder a los objetos es de la siguiente forma, con el uso de la sintaxis de corchetes[]
console.log(producto['nombre']); // para ello hacemos uso de la sintaxis de corchete y dentro de ellos, va la key como tal
// esta forma no es tan recomendable, pero puede existir la ocasion