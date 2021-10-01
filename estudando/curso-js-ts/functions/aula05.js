function funcao1 (nome) {
  return function () {
    return nome;
  };
}

const fun = funcao1('luiz');
const fun2 = funcao1('joao');
console.log(fun, fun2());