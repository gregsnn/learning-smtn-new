// herancas
// Camiseta, Caneca -- cor, material, aumento/desconto

function Prod (nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Prod.prototype.aumento = function(qtd) {
  this.preco += qtd;
};
Prod.prototype.desconto = function(qtd) {
  this.preco -= qtd;
};

function Camiseta(nome, preco, cor) {
  Prod.call(this, nome, preco);
  this.cor = cor
}
Camiseta.prototype = Object.create(Prod.prototype)
Camiseta.prototype.constructor = Camiseta

// ja existe - estamos escrevendo sobre o mesmo
Camiseta.prototype.aumento = function(percent) {
  this.preco = this.preco + (this.preco * (percent / 100));
};

function Caneca (nome, preco, material, estoque) {
  Prod.call(this, nome, preco)
  this.material = material
  
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (v) {
      if (typeof v !== 'number') {
        throw new TypeError('Not a valid number')
      }
      estoque = v;
    }
  })
}
Caneca.prototype = Object.create(Prod.prototype)
Caneca.prototype.constructor = Caneca

// ja existe - estamos escrevendo sobre o mesmo
Caneca.prototype.desconto = function(percent) {
  this.preco = this.preco - (this.preco * (percent / 100));
};

const prod = new Prod('Gen', 11.1)
const camiseta = new Camiseta('Regata', 25.2, 'Preta')
const caneca = new Caneca('Caneca StarWars', 52.50, 'porcelana', 5)

camiseta.aumento(10)
caneca.desconto(20)
caneca.estoque = 100 // '100';

// console.log(camiseta);
console.log(caneca.estoque);
// console.log(prod);
