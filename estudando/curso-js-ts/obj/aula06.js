// manipulando os Prototypes
// new Object(); -> contem Object.prototype
const objA = {
  chaveA: 'A'
  // __proto__: Object.prototype -> ultimo da cadeia
};

const objB = {
  chaveB: 'B'
  // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objB.chaveA); // so da pra ver no navegador essa bosta, fodase


function Prod (nome, preco) {
  this.nome = nome
  this.preco = preco
}

Prod.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
};

Prod.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Prod('Camisa', 50);

const p2 = {
  nome: 'Caneca',
  preco: 15
};
Object.setPrototypeOf(p2, Prod.prototype);

const p3 = Object.create(Prod.prototype, {
  preco: {
    enumerable: true,
    writable: true,
    value: 132
  },
  tamanho: {
    enumerable: true,
    writable: false,
    value: 54
  }
});

p1.desconto(27);
p2.aumento(15);
p3.desconto(12);

console.log(p3);