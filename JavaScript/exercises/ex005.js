const dinheiro = function(money) {

    return `R$ ${money.toFixed(2)}`
}

console.log(dinheiro(0.1 + 0.2).replace(".", ","))

// esperando revisão
