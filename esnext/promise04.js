function gerarNums(min, max) {
    if(min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        const fator = max - min + 1
        const random = parseInt(Math.random() * fator + min)
        resolve(random)
    })
}

gerarNums(1, 60)
    .then(num => num * 10)
    .then(numX10 => `o numero gerado foi ${numX10}`)
    .then(console.log)