const soma = function(x, y) {
    return x + y
}

const printResults = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

printResults(4, 3)
printResults(4, 3, soma)
printResults(4, 3, function(x, y) {
    return x - y
})
printResults(4, 3, (x, y) => x * y)

const pessoa = {
    falar: function() {  // "falar()" também funciona para essa situação.
        console.log(`Opa`)
    }
}

pessoa.falar()