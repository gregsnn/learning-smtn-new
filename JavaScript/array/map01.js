const nums = [1, 2, 3, 4, 5]

// .map = For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado) // .map gera novo array

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // sendo array pode-se chamar o .map mais de uma vez
console.log(resultado)