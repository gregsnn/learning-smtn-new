function criarProduto(nome, preco) { // usando valor padrão tira necessidade de usar ":" em objetos
    return {
        nome, preco, desconto: 0.1
    }
}

console.log(criarProduto(`iPhone`, 5000.99))
console.log(criarProduto(`Notebook`, 2500.99))
console.log(criarProduto(`Motorola`, 890.99))