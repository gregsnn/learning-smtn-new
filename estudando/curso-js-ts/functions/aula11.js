// funcao geradora
// function* Geradora() {
//   // codigo
//   yield 'valor 1'
//   // codigo
//   yield 'valor 2'
//   // codigo
//   yield 'valor 3'
// }

// const g1 = geradora();
// for (let v of g1) {
//   console.log(v);
// }

// function* Contador() {
//   let i = 0;
  
//   while (true) { 
//     yield i;
//     i++
//   }
// }
// const g2 = Contador();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

// function* gerar() {
//   yield 0;
//   yield 1;
//   yield 2;
// }

// function* gerar2() {
//   yield* gerar();
//   yield 3;
//   yield 4;
//   yield 5;
// }

// const g4 = gerar2();
// for (let v of g4) {
//   console.log(v);
// }

function* generator() {
  yield function () {
    console.log('y1');
  }

  // o "return" quebra yield (os demais yield nao serao acessados)  
  // codiguin

  yield function () {
    console.log('y2');
  }
}

const g5 = generator();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1()
func2()