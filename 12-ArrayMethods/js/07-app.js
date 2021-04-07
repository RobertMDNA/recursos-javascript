// concat - para unir dos o mas arreglos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
const meses2 = ['Junio', 'Julio', 'Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// concatenando mas de dos arreglos con concat
const meses4 = meses.concat(meses2, meses3);
console.log(meses4);

// concatenando mas de dos arreglos con el spread operator
const meses5 = [...meses, ...meses2, ...meses3];
console.log(meses5);