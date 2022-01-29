@inverteNomeECor
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('sou a classe Animal');
  }
}

// para class
function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('sou o decorador e recebi', target);

  return class extends target {
    name: string;
    color: string;
    constructor(...args: any[]) {
      super(...args);
      this.name = this.reverse(args[0]);
      this.color = this.reverse(args[1]);
    }

    reverse(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Bob', 'Preto');
console.log(animal);
