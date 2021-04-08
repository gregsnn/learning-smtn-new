const printResults = function(nota) {
    if(nota >= 7) {
        console.log('aprovado')
    } else {
        console.log('reprovado')
    }
}

printResults(4)
printResults(8)
printResults('epa') // cuidar com o fato de js ser fracamente tipada