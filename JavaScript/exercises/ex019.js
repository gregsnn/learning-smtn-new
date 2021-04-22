const cardapio = function (quantidade, codigo) {

    switch (codigo) {
        case 100:
            return "R$" + (valor = 3.00 * quantidade).toFixed(2)
        case 200:
            return "R$" + (valor = 4.00 * quantidade).toFixed(2)
        case 300:
            return "R$" + (valor = 5.50 * quantidade).toFixed(2)
        case 400:
            return "R$" + (valor = 7.50 * quantidade).toFixed(2)
        case 500:
            return "R$" + (valor = 3.50 * quantidade).toFixed(2)
        case 600:
            return "R$" + (valor = 2.80 * quantidade).toFixed(2)
        default:
            return "Este produto está em falta."
    }
}

console.log(cardapio(5, 100))
console.log(cardapio(2, 200))
console.log(cardapio(2, 300))
console.log(cardapio(2, 400))
console.log(cardapio(2, 500))
console.log(cardapio(2, 600))
console.log(cardapio(2, 700))

// (y)