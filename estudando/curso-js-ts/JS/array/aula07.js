// retorne a soma do dobro de todos os pares
// -> filtrar pares
// -> dobrar valores
// -> somar tudo

const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const pares = (val) => val % 2 === 0;
const dobro = (val) => val * 2;
const soma = (acc, val) => acc += val;

console.log(nums.filter(pares).map(dobro).reduce(soma));