const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 29,
  falar() { console.log(`a minha idade atual eh de: ${this.idade}`) },
  incrementarIdade() { this.idade++ }
};

// function criaPessoa(nome, sobrenome, idade) {
//   return { nome, sobrenome, idade }
// }

// const pessoa1 = criaPessoa('luiz', 'miranda', 23) // args = valor passado para o parametro
// const pessoa2 = criaPessoa('gre', 'nunes', 21)
// const pessoa3 = criaPessoa('raf', 'lopez', 53)

pessoa1.falar();
pessoa1.incrementarIdade();
pessoa1.falar();
pessoa1.incrementarIdade();
pessoa1.falar();
pessoa1.incrementarIdade();
pessoa1.falar();

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);