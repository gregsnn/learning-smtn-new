/* eslint-disable */

// basicos (ocorre inferencia de tipos)
let nome: string = 'João'; // '' "" ``
let idade: number = 27; // 10, 1.5, -5.5, 0xf00d, 0b1010, 0o744
let adulto: boolean = true; // true ou false
let simbol: symbol = Symbol('simbolo'); // symbol
let big: bigint = 10n; // bigint

// arrays
let arrayNumber: Array<number> = [1, 2, 3];
let arrayNumber2: number[] = [1, 2, 3];
let arrayString: Array<string> = ['a', 'b', 'c'];
let arrayString2: string[] = ['a', 'b', 'c'];

// objetos
let obj: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'João',
  idade: 27,
};

// funcoes
function soma(x: number, y: number) /*: number*/ {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
