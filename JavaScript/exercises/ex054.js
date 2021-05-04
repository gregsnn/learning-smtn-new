/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento: */

function objParaArray(obj) {
    return Object.entries(obj)
}

console.log(objParaArray(obj = ({ nome: "Maria", profissao: "Desenvolvedora de software" })))