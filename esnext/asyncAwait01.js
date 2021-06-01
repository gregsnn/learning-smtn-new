// com promise
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` 
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let results = ''
            
            res.on('data', dados => {
                results += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(results))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

// Recuso do ES8
// Objetivo de simplificar o uso de Promise

let obterAlunos = async () => {
    const T1 = await getTurma('A')
    const T2 = await getTurma('B')
    const T3 = await getTurma('C')
    return [].concat(T1, T2, T3)
} // retorna objecto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))