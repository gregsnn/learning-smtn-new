type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
// type Pessoa = TemNome | TemSobrenome | TemIdade; // muito relaxado
type Pessoa = TemNome & TemSobrenome & TemIdade; // mais restritivo

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD; // 'A'

const pessoa: Pessoa = {
  idade: 21,
  nome: 'Greg',
  sobrenome: 'Santos',
};

console.log(pessoa);

export default 1;
