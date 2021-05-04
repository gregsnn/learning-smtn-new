/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

function repetir(vaiRepetir, repetidor) {
    let array = []

    for(let i = 0; i < repetidor; i++) {
        array.push(vaiRepetir)
    }

    return array
}

console.log(repetir("blitz", 5))
console.log(repetir(10, 5))