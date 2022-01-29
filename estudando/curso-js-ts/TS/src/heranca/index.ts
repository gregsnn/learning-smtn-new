export class Pessoa {
  nome: string;
  sobrenome: string;
  private _idade: number;
  protected cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this._idade = idade;
    this.cpf = cpf;
  }

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
  private _matricula: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string, matricula: string) {
    super(nome, sobrenome, idade, cpf);
    this._matricula = matricula;
  }

  getNomeCompleto(): string {
    return `ISSO VEM DO ALUNO:: ${this.nome} ${this.sobrenome}`;
  }

  getMatricula(): string {
    return this._matricula;
  }
}

export class Cliente extends Pessoa {
  private _codigo: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string, codigo: string) {
    super(nome, sobrenome, idade, cpf);
    this._codigo = codigo;
  }

  getNomeCompleto(): string {
    return `ISSO VEM DO CLIENTE:: ${this.nome} ${this.sobrenome}`;
  }

  getCodigo(): string {
    return this._codigo;
  }
}

const pessoa1 = new Pessoa('João', 'da Silva', 25, '123.456.789-00');
const aluno1 = new Aluno('Jonas', 'Garibaldi', 25, '111.111.111-11', 'e13123123');
const cliente1 = new Cliente('Jonas', 'Garibaldi', 25, '111.111.111-11', '413123');

console.log(pessoa1.getNomeCompleto());
console.log(aluno1.getNomeCompleto());
console.log(cliente1.getNomeCompleto());
console.log(aluno1.getIdade());
console.log(cliente1.getCpf());
console.log(aluno1.getMatricula());
console.log(cliente1.getCodigo());
