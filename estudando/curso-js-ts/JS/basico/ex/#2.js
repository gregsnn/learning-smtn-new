const fullName =
  { 
    nome: 'gre',
    sobrenome: 'lin' 
  }
console.log(fullName)
const idade = 21
const peso = 62
const altura = 1.62
const potencia = 2
let imc = (peso / (altura ** potencia)).toFixed(2)
let anoAtual = 2021
let anoNascimento = anoAtual - idade

console.log(`${fullName.nome} ${fullName.sobrenome} tem ${idade} anos, pesa ${peso}kg e tem ${altura}m, seu IMC e de ${imc}\n${fullName.nome} ${fullName.sobrenome} nasceu em ${anoNascimento}`)