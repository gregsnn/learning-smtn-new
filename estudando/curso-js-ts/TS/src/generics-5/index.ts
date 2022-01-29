export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

// consegue inferir o tipo de dado---
// const pessoa1 = new Pessoa('Luiz', 20);
// const pessoa2 = new Pessoa(['Maria'], { idade: 25 });
// const pessoa3 = new Pessoa<string, number>('Luiz', 20);

// stack-- pilha
export class Stack<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(element: T) {
    this.elementos[this.contador] = element;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    const element = this.elementos[this.contador - 1];
    delete this.elementos[this.contador - 1];
    this.contador--;
    return element;
  }

  peek(): T | void {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    return this.elementos[this.contador - 1];
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  size(): number {
    return this.contador;
  }

  showStack(): void {
    for (const key in this.elementos) {
      console.log(this.elementos[key]);
    }
  }
}

// nao consegue inferir o tipo de dado---
const stack = new Stack<number>();
const stack2 = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
// const element = stack.pop();

stack.showStack();

while (!stack.isEmpty()) {
  console.log(stack.pop());
}
