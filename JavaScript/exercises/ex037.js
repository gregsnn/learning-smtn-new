/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), ​ a1 ​ (o primeiro termo) e ​ r ​ (a razão) e escreva os ​ n ​ termos ,
bem como a soma dos elementos. */

function progressAritm(numTerm, firstTerm, razao) {
    for (let i = 0; i < numTerm; i++) {
        console.log(firstTerm + razao * i)
    }
    console.log('Soma: ' + (numTerm * (firstTerm + (firstTerm + ((numTerm - 1) * razao)))) / 2)
}

function progressGeomet(numTerm, firstTerm, razao) {
    //console.log(firstTerm)
    for (let i = 0; i < numTerm; i++) {
        console.log(firstTerm * (razao ** i))
    }
    console.log('Soma: ' + (firstTerm * ((razao ** numTerm) - 1)) / (razao - 1))
}

progressAritm(10, 10, 15)
console.log(' ');
progressGeomet(10, 5, 3)

// consultar uFleck