import idade, { nome as nome_model1, sobrenome_model1, soma, Pessoa } from './modulo1';
// import * as modulo1 from './modulo1';
// import qlqrNome from './modulo1'; // export default soma(); 
// import idade from './modulo1'; // export { idade as default };

// const nome = 'Joao';

console.log( sobrenome_model1, idade);
console.log(nome_model1);
console.log(soma(6, 4));

const p1 = new Pessoa(nome_model1, sobrenome_model1, idade);

console.log(p1);