function workOrNot(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('same')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

workOrNot('test...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(console.log)
    .catch(e => console.log(`Erro Geral: ${e}`)) // catch vem ao fim do promise.