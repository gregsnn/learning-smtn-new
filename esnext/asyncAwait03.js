function gerarNums(min, max, proibidos) {
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const random = parseInt(Math.random() * fator + min)
        if(proibidos.includes(random)) {
            reject('Numero já anunciado')
        } else {
            resolve(random)
        }
    })
}

async function gerarMega(qtdNumeros, tentativas = 1) {
    const numeros = []
    try {
        for(let _ of Array(qtdNumeros).fill()) {
            numeros.push( await gerarNums(1, 60, numeros ))
        }
        return numeros    
    } catch (error) {
        if(tentativas > 10) {
            throw "Não aprovado"
        } else {
            return gerarMega(qtdNumeros, tentativas + 1)
        }
    }
    
}

gerarMega(30)
    .then(console.log)
    .catch(console.log)