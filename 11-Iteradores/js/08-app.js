// for in...
const pendientes = ['Tarea', 'Comer', 'Dormir', 'Estudiar JavaScript', 'Volver A Dormir'];

// arreglo de objetos
const producto = {
    nombre: 'TV 32"', 
    precio: 3200,
    disponible: true,
}
// es importante tener en cuenta que for of itera sobre arreglos
// mientras que for in itera sobre objetos

for (const product in producto) { // este for lo que hara, sera iterar sobre las llaves de nuestro objeto
    console.log(`${producto[product]}`); // de esta forma, mostrara los valores y no las keys
}

// otra forma de recorrer objetos con for of
for (const [key, value] of Object.entries(producto)) {
    console.log(`${value}`);
}