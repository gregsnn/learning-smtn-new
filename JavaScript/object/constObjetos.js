// pessoa -> 123 -> {...}
const pessoa = { nome: "Ana" }
pessoa.nome = "Jonas"
console.log(pessoa)

/* pessoa -> 456 -> {...} (tentar mudar endereço de const vai causar erro)
pessoa = { nome: "João"} */

Object.freeze(pessoa)

pessoa.nome = "Iara"
pessoa.end = "Rua ABC"
delete pessoa.nome
console.log(pessoa.nome)

const pessoaConst = Object.freeze({nome: "Jeni"})
pessoaConst.nome = "Frida"
console.log(pessoaConst)