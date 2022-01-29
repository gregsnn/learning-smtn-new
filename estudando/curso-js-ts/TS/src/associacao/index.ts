export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta digitando...`);
  }
}

export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  get ferramenta(): Ferramenta {
    if (!this._ferramenta) {
      throw new Error('Nenhuma ferramenta selecionada');
    }
    return this._ferramenta;
  }

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }

  escrever(): void {
    if (this.ferramenta) console.log(this.ferramenta.escrever());
  }
}

const escritor = new Escritor('João');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Máquina de escrever');

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaEscrever.nome);

escritor.ferramenta = caneta;
escritor.ferramenta = maquinaEscrever;
escritor.escrever();
