// type TipoPessoa = {
//   nome: string;
//   sobrenome: string;
//   get nomeCompleto(): string;
// };

type Nome = {
  nome: string;
};
type Sobrenome = {
  sobrenome: string;
};
type NomeCompleto = {
  get nomeCompleto(): string;
};

class Pessoa implements Nome, Sobrenome, NomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}
  public get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('João', 'da Silva');
console.log(pessoa.nomeCompleto);

export default 1;
