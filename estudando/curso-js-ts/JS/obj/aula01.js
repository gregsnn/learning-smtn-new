// OBJECTS 
// Literal string -> '' - "" - ``
// Literal array -> []
// Literal object -> {}
// function dentro de obj === metodo

// const pessoa = { // corpo do objeto
//   nome: 'luiz', // chave: valor
//   sobrenome: 'miranda',
//   localizacao: { 
//     cidade: 'SP',
//     bairro: 'ABC'
//   }
// };

// const chave = 'nome';
// console.log(pessoa.nome);
// console.log(pessoa['nome']);
// console.log(pessoa[chave]);

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otavio';
// pessoa1.idade = 21;
// pessoa1.falarNome = function() {
//   return `${this.nome} esta falando seu nome.`;
// };
// pessoa1.getDataNascimento = function() {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// }
// pessoa1.falarNome()
// pessoa1.getDataNascimento()

// for (let v in pessoa1) {
//   console.log(pessoa1[v]);
// }
// delete pessoa1.nome;


// factory function / constructor function / class
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    }
  }
}

function Pessoa(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome

  const nomeCompleto = () => {
    return `${this.nome} ${this.sobrenome}`
  }
  this.nomeCompleto = nomeCompleto();
  Object.freeze(this)
}

const p1 = criaPessoa('Luiz', 'Otavio')

//   {p2} <- this (this muda de pessoa para pessoa)
//   {p3} <- this (this muda de pessoa para pessoa)
//   {p4} <- this (this muda de pessoa para pessoa)
const p2 = new Pessoa('Luiz', 'Otavio')
const p3 = new Pessoa('Maria', 'Helena')

console.log(p1.nomeCompleto);
delete p2.nome
console.log(p2.nomeCompleto);
console.log(p3.nomeCompleto);
console.log(p3);