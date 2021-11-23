/*
Object.values
Object.entries
Object.assign(target, source)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// ja foi visto
Object.keys (retornas as chaves)
Object.freeze (congela obj)
Object.defineProperty (define uma propriedade)
Object.defineProperties (define varias propriedades)
*/

// -> apontando para o mesmo local
// const prod = {
//   nome: 'caneca',
//   preco: 1.90
// };
// const outraCoisa = prod; // aponta para o endereco
// prod.nome = 'camisa'
// outraCoisa.preco = 2.5
// console.log(prod);
// console.log(outraCoisa);

// -> copiando para outra constante
// const prod = {
//   nome: 'caneca',
//   preco: 1.90
// };
// const caneca = { ...prod, material: 'porcelana' }; // copia a primeria const
// prod.nome = 'camisa'
// caneca.preco = 2.5
// console.log(prod);
// console.log(caneca);

// -> Object.assign
// const prod = {
//   nome: 'caneca',
//   preco: 1.90
// };
// const caneca = Object.assign({}, prod, { material: 'porcelana' })
// prod.nome = 'camisa'
// caneca.preco = 2.5
// console.log(prod);
// console.log(caneca);


// -> Object.getOwnPropertiesDescriptor
// const prod = {
//   nome: 'caneca',
//   preco: 1.90
// };
// Object.defineProperty(prod, 'nome', {
//   writable: false,
//   configurable: false
// })

// prod.nome = 'outra coisa.';
// delete prod.nome
// console.log(prod);
// console.log(Object.getOwnPropertyDescriptor(prod, 'nome'));


// -> Object.values
// const prod = {
//   nome: 'caneca',
//   preco: 1.90
// };
// console.log(Object.values(prod));

// -> Object.entries
const prod = {
  nome: 'caneca',
  preco: 1.90
};
console.log(Object.entries(prod));

// for (let [chave, valor] of Object.entries(prod)) {
//   console.log(`${chave}: ${valor}`);
// }