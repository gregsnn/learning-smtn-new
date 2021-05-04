/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. */

function soma(array) {
    const sum = (total, valor) => valor + total
    return array.reduce(sum)
}

console.log(soma([10, 10, 10]))
console.log(soma([15, 15, 15, 15]))