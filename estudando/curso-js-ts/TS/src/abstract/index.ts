export abstract class Personagem {
  protected abstract emoji: string;

  constructor(protected nome: string, protected ataque: number, protected vida: number) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.getDano(this.ataque);
  }

  getDano(valorAtaque: number): void {
    this.vida -= valorAtaque;
    console.log(`${this.emoji}: ${this.nome} agora tem ${this.vida} de vida`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '🤺';
  bordao(): void {
    console.log(`${this.emoji} SLAVE THEM ALL!!!!!!!!!!!`);
  }
}
export class Monstro extends Personagem {
  protected emoji = '🤖';
  bordao(): void {
    console.log(`${this.emoji} AAAAAAAAAAAAAAAAAAAAA`);
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 90, 1000);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
