// FILTER = filtrar -> retorna sempre um array

// retorne os numeros maiores do que 10
const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

function callbackFilter(valor) {
  return valor > 10
}
const BiggerTenTen = nums.filter(callbackFilter)
const BiggerTenTen = nums.filter(function(valor) {
  return valor > 10
})
const BiggerTenTen = nums.filter(v => v > 10)

console.log(BiggerTenTen);


// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Luiz', idade: 32 },
  { nome: 'Roberto', idade: 16 },
  { nome: 'Andrei', idade: 65 },
  { nome: 'Luiza', idade: 52 },
  { nome: 'Joao', idade: 76 },
  { nome: 'Drak', idade: 43 },
];
const nomeLenghtFilter = obj => obj.nome.length >= 4;
const idadeFilter = obj => obj.idade > 50;
const lastOneFilter = obj => obj.nome.toLowerCase().endsWith('a'); // .nome.slice(-1) === 'a'

function filtro(ar, fil) {
  console.log(ar.filter(fil));
}
filtro(pessoas, nomeLenghtFilter);
filtro(pessoas, idadeFilter);
filtro(pessoas, lastOneFilter);