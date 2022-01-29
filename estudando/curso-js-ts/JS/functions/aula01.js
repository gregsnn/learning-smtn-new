// declaracao de function (function hoisting)
sayHi();
function sayHi() {
  console.log('Hi!');
}

// first-class objects
// function expression
const souUmDado = function () {
  console.log('Sou um dado.');
};

function execFunction(func) {
  func();
}
execFunction(souUmDado)

// arrow function
const arrowFunction = (x = 1) => {
  console.log(x + x);
}
arrowFunction();

// dentro de um object
const obj = {
  // falar: function () {} - OU -
  falar() {
    console.log('estou falando');
  }
};
obj.falar();