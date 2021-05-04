/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares. */

function somentePar(array) {
    return array.filter((num, index) => {
        const par = num % 2 === 0
        const indexPar = index % 2 === 0

        return par && indexPar
    })
}

console.log(somentePar([10, 70, 22, 43]))
console.log(somentePar([1, 2, 3, 4, 6, 4]))
console.log(somentePar([1, 12, 76, 55]))
