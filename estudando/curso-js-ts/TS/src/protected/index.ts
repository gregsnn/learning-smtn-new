export class Empresa {
  private readonly _id: number;
  readonly nome: string; // public default
  protected readonly _colaboradores: Colaborador[] = [];
  private readonly _cnpj: string;

  constructor(id: number, nome: string, cnpj: string) {
    this._id = id;
    this.nome = nome;
    this._cnpj = cnpj;
  }

  public get id(): number {
    return this._id;
  }

  addColaborador(colaborador: Colaborador): void {
    this._colaboradores.push(colaborador);
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

export class Udemy extends Empresa {
  constructor() {
    super(1, 'Udemy', '123.456.789/0001-00');
  }
  popColaborador(): Colaborador | null {
    const colaborador = this._colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Jonas', 'Garibaldi');
const colaborador2 = new Colaborador('Lennon', 'Hendrix');
const colaborador3 = new Colaborador('Paul', 'McCartney');
empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);

const colaboradorRemovido = empresa1.popColaborador();

console.log(colaboradorRemovido);

console.log(empresa1);
