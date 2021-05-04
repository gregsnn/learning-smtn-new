const alunos = [
    { nome: "joao", nota: 7.3, bolsista: true },
    { nome: "maria", nota: 9.2, bolsista: false },
    { nome: "pedro", nota: 9.8, bolsista: true },
    { nome: "ana", nota: 8.7, bolsista: false }
]
// Desafio 1: todos os alunos são bolsistas?
const resultado = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(resultado))

// Desafio 2: algum aluno é bolsista?
const results = (results, bolsista) => results || bolsista
console.log(alunos.map(a => a.bolsista).reduce(results))