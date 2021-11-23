const nomes = [
  'maria', 'joao', 'eduardo', 'gabriel', 'julia'
];

// nomes.splice(indiceInicial, deleteQtd, elem1, elem2, elem3);
// Number.MAX_VALUE - deleteQtd

// pop
const pop = nomes.splice(-1, 1);

// shift
const shift = nomes.splice(0, 1);

// push
nomes.splice(nomes.length, 0, 'luiz', 'otavio');

// unshfit
nomes.splice(0, 0, 'luiz', 'otavio');


console.log(nomes);
console.log(pop);
console.log(shift);