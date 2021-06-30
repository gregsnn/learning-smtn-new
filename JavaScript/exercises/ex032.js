function media() {
    let numeros = [10, 10, 20, 30, 30]
    let soma = 0

    for(let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }

    return soma/numeros.length
}

console.log(media())

// (y)