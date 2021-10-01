// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//var multiCien = numbers.map(number => number * 100);

//console.log(multiCien)

function multiplicar (numero){
    return numero * 100;
}

var multiplicarCien = numbers.map(multiplicar);

console.log(multiplicarCien)



function map (lista, fn) {
    var resultado = []

    for (i=0; i < lista.length; i++) {
        resultado[i] = fn(lista[i])
    }

    return resultado
}

function forEach (lista, fn) {
    for (i=0; i < lista.length; i++) {
        fn(lista[i])
    }
}
