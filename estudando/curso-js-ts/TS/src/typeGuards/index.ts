export function add(a: unknown, b: unknown) {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('1', '5'));

type Pessoa = {
  tipo: 'pessoa';
  nome: string;
};
type Animal = {
  tipo: 'animal';
  cor: string;
};
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

// type guard
function getNome(obj: PessoaOuAnimal) {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      break;
    case 'animal':
      console.log(obj.cor);
      break;
  }
}

getNome(new Aluno('João'));
getNome({ tipo: 'animal', cor: 'preto' });
