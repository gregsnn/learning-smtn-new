/*
  criar algoritmo que receba placa de carro e uma lista de char, o algoritmo deve retornar apenas as placas que contenham todos os char informados. sendo que estes podem estar em qualquer ordem 
 */

let placas = ['YUL4149', 'JDI0804', 'NES2176', 'ESP8622', 'IBM4680', 'YES9091']
let carac = ['Y', 'L', '1']
// let carac = ['8']
// let carac = ['J', 'D', 'I']
// let carac = ['4', '8', 'I']

for (let x in carac) {
  placas = placas.filter(placas => placas.includes(carac[x]))
}

console.log(placas);