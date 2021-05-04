/* Criar uma função que receba um array de números e retorne o menor número desse array. */

function menor(array) {

    array.sort( function(a, b) { return a - b})
    let minor = array.shift()

    return minor
}

console.log(menor([10, 5, 35, 65]))
console.log(menor([5, -15, 50, 3]))