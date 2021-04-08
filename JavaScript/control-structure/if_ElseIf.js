Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const printResults = function(nota) {
    if(nota.entre(9, 10)) {
        console.log('quadro de honra')
    } else if(nota.entre(7, 8.99)) {
        console.log('aprovado')
    } else if(nota.entre(5, 6.99)) {
        console.log('recuperação')
    } else if(nota.entre(0, 4.99)) {
        console.log('reprovado')
    } else {
        console.log('nota invalida')
    }
}

printResults(10)
printResults(8)
printResults(6)
printResults(3)
printResults(20)