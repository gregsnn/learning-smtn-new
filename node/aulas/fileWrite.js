const fs = require('fs')

const prod = {
    nome: "Celular",
    preco: 1234.56,
    desconto: 0.15
}

fs.writeFile(__dirname + '/fileGenerate.json', JSON.stringify(prod), err => {
    console.log(err || 'arquivo salvo!')
})