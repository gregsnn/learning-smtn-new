const pessoa = {
  nome: 'Kayle',
  sobrenome: 'Marques',
  idade: 30,
  address: {
    rua: 'Av. Brasil',
    numero: 120
  }
};
const { nome: teste = '', address: {rua, numero}, ...resto} = pessoa;

console.log(resto, rua, numero);