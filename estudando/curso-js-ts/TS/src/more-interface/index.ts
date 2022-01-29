// declaration merging
interface Pessoa {
  nome: string;
}
interface Pessoa {
  readonly sobrenome: string;
}
interface Pessoa {
  readonly enderecos: readonly string[];
}
interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'João',
  sobrenome: 'Silva',
  enderecos: ['Rua 1', 'Rua 2'],
  idade: 20,
};

// pessoa.sobrenome = 'da Silva';
console.log(pessoa);
