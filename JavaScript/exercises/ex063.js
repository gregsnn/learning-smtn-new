/* Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela. */

function quantasPalavras(string) {
    results = string.split(' ').length

    return results
}

console.log(quantasPalavras("Sou uma frase"))
console.log(quantasPalavras("Me divirto aprendendo a programar"))