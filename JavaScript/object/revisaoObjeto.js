// coleção dinâmica de pares chave/valor

const prod = new Object
prod.nome = "cadeira"
prod["marca do produto"] = "genérica" // não usual
prod.preco = 220
console.log(prod)

delete prod.preco
delete prod["marca do produto"]
console.log(prod)
// 

const  carro = {
    modelo: "A4", valor: 84.000, proprietario: {
        nome: "Raul", idade: 54, endereco: {
            logradouro: "Rua ABC", numero: 123
        }
    },
    condutores: [{
        nome: "Junior", idade: 19
    }, {
        nome: "Ana", idade: 22
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro["proprietario"]["endereco"]["logradouro"] = "Vish"
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) // verificar se objeto existe antes de tentar acessa-lo (tentar acessar algo que não está definido haverão problemas)