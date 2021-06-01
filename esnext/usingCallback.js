// sem Promise
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let results = ''

        res.on('data', dados => {
            results += dados
        })

        res.on('end', () => {
            callback(JSON.parse(results))
        })
    })
}

let nomes = []
getTurma('A', alunos => {  // CALLBACK HELL
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})  // forma não agradável de se chegar ao resultado