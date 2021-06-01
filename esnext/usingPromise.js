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

let nomes = []

// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nomee}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })   // forma ainda não agradável de se chegar ao resultado

Promise.all([getTurma('A'), getTurma('B'),getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))  // maneira mais adequada de tratar a atividade.

getTurma('D').catch(e => console.log(e.message))