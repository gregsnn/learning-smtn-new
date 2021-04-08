const printResults = function(nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log(`quadro de honra`)
            break
        case 8: case 7:
            console.log(`aprovado`)
            break
        case 6: case 5: case 4:
            console.log(`recuperação`)
            break
        case 3: case 2: case 1: case 0:
            console.log(`reprovado`)
            break
        default:
            console.log(`nota invalida`)
    }
}

printResults(10)
printResults(8.6)
printResults(5.75)
printResults(2.6)
printResults(11)