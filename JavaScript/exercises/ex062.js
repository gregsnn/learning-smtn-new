/* Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado. */

function sorte(num) {
    results = ""
    random = Math.random().toFixed(1) * 10
    if(random == 0) {
        random + 1
    } if(random == num) {
        results = `Parabéns! O número sorteado foi o ${random}`
    } else {
        results = `Que pena! O número sorteado foi o ${random}`
    }

    return results
}

console.log(sorte(7))
console.log(sorte(2))
console.log(sorte(6))