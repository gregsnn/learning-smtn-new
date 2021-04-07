const nota = [5.2, 2.4, 2.5, 6.4, 7.3]

for(let i in nota) {
    console.log(i, nota[i])
}

const pessoa = {
    nome: "Ana", sobrenome: "Machado", idade: 19, peso: 60
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}