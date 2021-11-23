// REDUCE -> reduz array para um elemento unico.

const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = (acumulador, valor) => {
  if (valor % 2 === 0) acumulador += valor;
  return acumulador;
}

console.log(nums.reduce(total, 0));
// numero pos virgula eh o valor inicial do acumulador, podendo ser algo alem de um numero (poderia ser "[]" ou "{}")


const pessoas = [
  { nome: 'Luiz', idade: 102 },
  { nome: 'Roberto', idade: 106 },
  { nome: 'Andrei', idade: 605 },
  { nome: 'Luiza', idade: 502 },
  { nome: 'Joao', idade: 706 },
  { nome: 'Drake', idade: 923 },
];

const maisVelha = (acc, val) => {
  if (acc.idade > val.idade) return acc;
  return val
}

console.log(pessoas.reduce(maisVelha));