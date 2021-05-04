function multiplicar(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0

    return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador - 1)
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 5))
console.log(multiplicar(6, 3))

// revisar.