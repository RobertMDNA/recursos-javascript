// copiar dos objetos
const producto = {
    nombre: 'Monitor 24"', // key = nombre: 'valor de la propiedad'
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

// mostrando ambos objetos
console.log(producto);
console.log(medidas);

// uniendo ambos objetos, con assign
const resultado = Object.assign(producto, medidas);

// mostrando el objeto completo
console.log(resultado);

// existe otra forma de unir objetos con el spread operator o rest operator
const resultado2 = { ...producto, ...medidas }; // estos tres puntos indican "copiar dicho objeto"

console.log(resultado2);