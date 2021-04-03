// for of...
const pendientes = ['Tarea', 'Comer', 'Dormir', 'Estudiar JavaScript', 'Volver A Dormir'];

// arreglo de objetos
const carrito = [
    {nombre: 'TV 32"', precio: 3200},
    {nombre: 'Mouse Inalambrico"', precio: 99.99},
    {nombre: 'Monitor Curvo 24"', precio: 2100},
    {nombre: 'TV 32"', precio: 3200},
]

// recorriendo un arreglo tradicional con un for of...
for (const pendiente of pendientes) {
    console.log(pendiente);
}

// recorriendo un arreglo de objetos con un for of...
for (const producto of carrito) {
    console.log(producto);
}