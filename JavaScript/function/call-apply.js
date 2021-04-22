function getPrice(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.price * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook", price: 4500.00, desconto: 0.15,
    getPrice
}

global.price = 20
global.desconto = 0.1
console.log(getPrice())
console.log(produto.getPrice())

const carro = { price: 15000, desconto: 0.20}
console.log(getPrice.call(carro))
console.log(getPrice.apply(carro))

console.log(getPrice.call(carro, 0.17, "$"))
console.log(getPrice.apply(carro, [0.25, "&"]))