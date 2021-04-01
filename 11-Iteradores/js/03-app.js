// el ejercicio fizz buzz
// de un numero de elementos
// compruebe cuales son multiplos de 3 e imprima la palabra fizz
// compruebe todos los que son multiplos de 5 e imprima la palabra buzz
// todos los que son multiplos de 3 & 5 e imprima fizz buzz
for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} - fizz buzz`);
    }else if (i % 3 == 0) {
        console.log(`${i} - fizz`);
    }else if(i % 5 == 0){
        console.log(`${i} - buzz`);
    }
}