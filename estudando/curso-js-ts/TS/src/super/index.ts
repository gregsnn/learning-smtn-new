export class Pessoa {
  constructor(public nome: string, public sobrenome: string, private _idade: number, protected cpf: string) {}

  getIdade(): number {
    return this._idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(nome: string, sobrenome: string, idade: number, cpf: string, public sala: string) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    return `ISSO VEM DO ALUNO:: ${this.nome} ${this.sobrenome}`;
  }
}

export class Cliente extends Pessoa {
  constructor(nome: string, sobrenome: string, idade: number, cpf: string, public codigo: string) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('piriripororo');
    return super.getNomeCompleto();
  }
}

const pessoa1 = new Pessoa('João', 'da Silva', 25, '123.456.789-00');
const aluno1 = new Aluno('Jonas', 'Garibaldi', 25, '111.111.111-11', '001');
const cliente1 = new Cliente('Jonas', 'Garibaldi', 25, '111.111.111-11', '413123');

console.log(pessoa1.getNomeCompleto());
console.log(aluno1.getNomeCompleto());
console.log(cliente1.getNomeCompleto());

console.log(aluno1);
