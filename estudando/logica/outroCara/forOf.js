const nome = ['luiz', 'pedro', 'antonio']
const pessoa = {
  nome: 'loez',
  sobrenome: 'asd'
}

// For = geralmente com iteraveis (array / string)
// For in = retorna indice ou chave (string, array ou objetos)
// For of = retorna o valor em si (iteraveis, array / string)

for(let v of nome) { // apenas com iteravel
  console.log(v);
}

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

for(let i in nome) {
  console.log(nome[i]);
}

// forEach
//            valor, indice, array = padrao forEach
nome.forEach(v => {
  console.log(v);
})