// Getter y Setter
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque
  Object.defineProperty(this, 'estoque', {
    enumerable: true, 
    configurable: false,
    get: () => {
      return estoquePrivado
    },
    set: (v) => {
      if (typeof v !== 'number') {
        throw new TypeError('value setted is not a number')
      }
      estoquePrivado = v;
    }
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(v) {
      v = v.replace(' ', '')
      nome = v
    }
  }
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 1
console.log(p1);

const p2 = criaProduto('Boneca LOL')
p2.nome = 'qlqr coisa.'
console.log(p2.nome);