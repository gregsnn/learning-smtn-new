// defineProperty (uma unica chave)-- defineProperties (varias chaves)
function Produto(nome, preco, estoque) {
  // this.nome = nome;
  // this.preco = preco;

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: false,
      configurable: false
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: false
    }
  });

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra ou nao a chave
    value: estoque, // valor
    writable: true, // pode ou nao alterar o valor
    configurable: false // pode ou nao reconfigurar a chave
  });
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 500;
delete p1.estoque
console.log(p1);

console.log(Object.keys(p1));