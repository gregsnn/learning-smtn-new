const frutas = ['Pera', 'Maca', 'Uva'];
const pessoa = {
  nome: 'aaaaaa',
  sobrenome: 'asdasdasd',
  idade: 20
};

for(let chave in pessoa) { 
  console.log(chave, pessoa[chave]);
}
for (let i in frutas) { // le indices ou chaves
  console.log(frutas[i]);
}

// console.log(pessoa.nome);

// const chave = 'nome'
// console.log(pessoa[chave])