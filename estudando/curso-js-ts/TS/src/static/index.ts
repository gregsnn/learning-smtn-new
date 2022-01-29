export class Pessoa {
  static IDADE_PADRAO = 0;
  static CPF_PADRAO = '000.000.000-00';
  constructor(public nome: string, public sobrenome: string, public idade: number, public cpf: string) {}

  metodoNormal(): string {
    return Pessoa.CPF_PADRAO + ' ' + Pessoa.IDADE_PADRAO;
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, this.IDADE_PADRAO, this.CPF_PADRAO);
  }
}

const pessoa1 = new Pessoa('João', 'da Silva', 25, '123.456.789-00');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Silva');

console.log(pessoa1);
console.log(pessoa2);
