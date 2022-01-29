export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeDeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return Math.round(this.produtos.reduce((soma, produto) => soma + produto.preco, 0) * 100) / 100;
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const prod1 = new Produto('Caneta', 1.99);
const prod2 = new Produto('Camiseta', 52.99);
const prod3 = new Produto('Sapato', 220.99);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(prod1, prod2, prod3);

console.log(prod1.nome, prod2.nome);
console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.quantidadeDeProdutos());
console.log(carrinhoDeCompras.valorTotal());
