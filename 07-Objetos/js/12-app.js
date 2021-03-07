// object literal
const producto = {
    nombre: 'Monitor 24"', // key = nombre: 'valor de la propiedad'
    precio: 300,
    disponible: true,
}

// object constructor
function Producto(nombre, precio){ // objeto con dos parametros
    this.nombre = nombre; // referenciamos nombre y precio a esos parametros
    this.precio = precio;
    this.disponible = true; // atributo por default comienza en true
}

// creando multiples objetos con diferentes argumentos y mostrando los valores por pantalla
const producto2 = new Producto("Monitor de 18 pulgadas", 500);
console.log(producto2);

const producto3 = new Producto("Televisor", 100);
console.log(producto3);