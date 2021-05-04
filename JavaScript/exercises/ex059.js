/* Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números. */

function media(numeros) {
    const quantidadeDeNumeros = numeros.length
    let somaTotal = 0
    
    for(numero of numeros) {
    somaTotal += numero
    }

    return somaTotal / quantidadeDeNumeros
}

console.log(media([0, 10]))
console.log(media([1, 2, 3, 4, 5]))