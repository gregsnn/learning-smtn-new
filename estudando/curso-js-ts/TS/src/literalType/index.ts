let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
// let a = 100 as const; // eslint-disable-line
const a = 100;

const person = {
  nome: 'Luiz' as const,
  sobrenome: 'Silva',
};

function escolhaCor(cor: 'Vermelho' | 'Verde' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));

// module mode
export default 1;
