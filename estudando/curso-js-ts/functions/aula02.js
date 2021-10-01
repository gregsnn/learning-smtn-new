// arguments = sustenta todos os argumentos enviados
function funcao() {
  let total = 0;
  for (let argument of arguments) {
    total += argument;
  }
  console.log(total);
}
funcao(6, 6);


function funcao2(a = 2, b = 0, c = 2) {
  console.log(a + b + c);
}
funcao2(1, 20);


function funcao3({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
let obj = {
  nome: 'Gre',
  sobrenome: 'nunes',
  idade: 21
}
funcao3(obj);
// funcao3({ nome: 'Luiz', sobrenome: 'Silva', idade: 30 });


function funcao4([v1, v2, v3]) {
  console.log(v1, v2, v3);
}
funcao4(['Luiz Miranda', 'Silva', 30]);


const conta = function (operador, acumulador, ...numeros) { // ...rest sempre deve ser o ultimo (meio obvio mas eh bom lembrar)
  console.log(operador, acumulador, numeros);
  for(let num of numeros) {
    if (operador === '+') acumulador += num
    if (operador === '+') acumulador -= num
    if (operador === '+') acumulador *= num
    if (operador === '+') acumulador /= num
  }

  console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);


const halo3 = (...args) => {
  console.log(args);
};
halo3('+', 1, 20, 30, 40, 50);