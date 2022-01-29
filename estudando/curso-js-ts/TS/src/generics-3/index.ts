interface PessoaProtocol<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}
type PessoaProtocol2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno: PessoaProtocol<string, number> = {
  nome: 'João',
  sobrenome: 'Silva',
  idade: 20,
};

const aluno2: PessoaProtocol2<number, number> = {
  nome: 1,
  sobrenome: 2,
  idade: 20,
};

const aluno3: PessoaProtocol = {
  nome: 'João',
  sobrenome: 'Silva',
  idade: 20,
};

console.log(aluno);
console.log(aluno2);
console.log(aluno3);
