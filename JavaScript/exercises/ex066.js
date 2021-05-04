/* Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
ou seja, sem as vogais. */

function removerVogais(frase) {
    return frase.replace(/[aeiou]/ig, '')
}

console.log(removerVogais("Fundamentos"))