function gerarNums(min, max, tempo) {
    if(min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const random = parseInt(Math.random() * fator + min)
            resolve(random)
        }, tempo)
        
    })
}

function gerarVariosNums() {
    return Promise.all([
        gerarNums(1, 60, 1000),
        gerarNums(1, 60, 3000),
        gerarNums(1, 60, 500)
    ])
}

gerarVariosNums()
    .then(numeros => console.log(numeros))