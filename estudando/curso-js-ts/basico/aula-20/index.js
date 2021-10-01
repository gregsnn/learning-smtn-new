function soma(x = 1, y = 1) {
  const resultado = x + y;
  return resultado;
}

// console.log(soma());
// console.log(soma(3, 3));
// console.log(soma(6, 3));

const raiz = function (num = 0) {
  return num ** (1/2);
};

// console.log(raiz(9))
// console.log(raiz(64))
// console.log(raiz(16))

// const raiz2 = n => n ** (1/2);
const raiz2 = (n) => {
  return n ** (1/2);
};

console.log(raiz2(9));