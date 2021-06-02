/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas. */

function contarCarac(carac, string) {
    let contador = 0
    for (let i = 0; i < string.length; i++)
        if (string.charAt(i) === carac) {
            contador++
        }

    return contador++
}

console.log(contarCarac("r", "A sorte favorece os audazes"))
console.log(contarCarac("c", "Conhece-te a ti mesmo"))