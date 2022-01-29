export class Pessoa {
  constructor(private _nome: string, private _sobrenome: string, private _idade: number, private _cpf: string) {}

  get cpf(): string {
    console.log('getter chamado');

    return this._cpf.replace(/\D/g, '');
  }

  set cpf(cpf: string) {
    console.log('setter chamado');

    this._cpf = cpf;
  }

  getNomeCompleto(): string {
    return `${this._nome} ${this._sobrenome}`;
  }
}

const pessoa1 = new Pessoa('João', 'da Silva', 25, '123.456.789-00');

pessoa1.cpf = '123.456.789-99';
console.log(pessoa1.cpf);
