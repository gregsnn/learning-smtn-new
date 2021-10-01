// return = retorna um valor / termina a function
function soma(a, b) {
  return a + b;
}
const s1 = soma(1, 2);

console.log(s1);

function soma2(a, b) {
  console.log(a + b); // n retorna nada (sem return), apenas exibe no console
}
soma2(5, 2)


function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome
  }
}

const p1 = criaPessoa('loez', 'gretzky')
const p2 = {
  nome: 'Joao',
  sobrenome: 'Oliveira'
}

console.log(p1, p2);


function falaFrase(comeco) {
  function falaResto(resto) {
    return `${comeco} ${resto}`;
  }

  return falaResto;
}

const fala = falaFrase('Ola');
const resto = fala('Mundo!');
console.log(resto);


function multi(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplicata = multi(2);
const triplicata = multi(3);
const quadribol = multi(4);

console.log(duplicata(10), triplicata(20), quadribol(30));