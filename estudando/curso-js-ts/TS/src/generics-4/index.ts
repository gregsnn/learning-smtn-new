type ObterChaveFn = <O, K extends keyof O>(object: O, key: K) => O[K]; // constraints

const obterChave: ObterChaveFn = (object, key) => object[key];

const animal = {
  nome: 'Rex',
  idade: 5,
  cor: 'preto',
  raca: 'Vira-lata',
  vacinas: ['vacina1', 'vacina2'],
};

const vacinas = obterChave(animal, 'vacinas');
const raca = obterChave(animal, 'raca');
const idade = obterChave(animal, 'idade');

console.log(vacinas);
console.log(raca);
console.log(idade);

export default 1;
