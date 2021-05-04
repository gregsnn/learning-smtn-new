/* Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array. */

function segundoMaior(numeros) {
    const maiorNumero = Math.max(...numeros)
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)
    return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))