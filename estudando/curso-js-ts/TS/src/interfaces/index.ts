// type Numero = number | string;
//TYPE
type Nome = {
  nome: string;
};
type Sobrenome = {
  sobrenome: string;
};
type NomeCompleto = {
  get nomeCompleto(): string;
};

// INTERFACE
interface InNome {
  nome: string;
}
interface InSobrenome {
  sobrenome: string;
}
interface InNomeCompleto {
  get nomeCompleto(): string;
}

type TipoPessoa = Nome & Sobrenome & NomeCompleto;
interface TipoPessoa2 extends InNome, InSobrenome, InNomeCompleto {}

class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}
  public get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const people: TipoPessoa2 = {
  nome: 'João',
  sobrenome: 'da Silva',
  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  },
};

const pessoa = new Pessoa('João', 'da Silva');
console.log(pessoa.nomeCompleto);
console.log(people.nomeCompleto);

export default 1;
