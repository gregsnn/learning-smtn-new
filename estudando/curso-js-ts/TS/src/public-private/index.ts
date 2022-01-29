export class Empresas {
  private readonly _id: number;
  readonly nome: string; // public default
  private readonly _colaboradores: Colaboradores[] = [];
  protected readonly cnpj: string;

  constructor(id: number, nome: string, cnpj: string) {
    this._id = id;
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public get id(): number {
    return this._id;
  }

  addColaborador(colaborador: Colaboradores): void {
    this._colaboradores.push(colaborador);
  }
}

export class Colaboradores {
  constructor(readonly nome: string, readonly sobrenome: string) {}
}

const empresa1 = new Empresas(1, 'Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaboradores('Jonas', 'Garibaldi');
const colaborador2 = new Colaboradores('Lennon', 'Hendrix');
const colaborador3 = new Colaboradores('Paul', 'McCartney');
empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);

console.log(empresa1.id);
