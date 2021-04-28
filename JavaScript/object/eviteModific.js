// Object.preventExtensions
const prod = Object.preventExtensions({
    nome: "qlqr", preco: 1.55, tag: "promoção"
})
console.log("Extensivel:", Object.isExtensible(prod))

prod.nome = "Borracha"
prod.descricao = "borraca escolar branca"
delete prod.tag

console.log(prod)

// Object.seal
const pessoa = { nome: "Juliana", idade: 54 }
Object.seal(pessoa)
console.log("Selado:", Object.isSealed(pessoa))

pessoa.sobrenome = "Silva"
delete pessoa.nome
pessoa.idade = 23
console.log(pessoa)

// Object.freeze = selado + valores constantes (nao podem ser modificados)