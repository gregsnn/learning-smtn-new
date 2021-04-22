const inteiro = function(a = 100, b = 3) {
    return Math.floor(a / b)
}

const resto = function(a = 100, b = 3) {
    return a % b
}

console.log(`Inteiro: ${inteiro()}, Resto: ${resto()}`)

// (y)