function intervalo(vetorNum) {
    intervalo = 0
    foraIntervalo = 0

    for(let i = 0; i < vetorNum.length; i++) {
        if (vetorNum[i] >= 10 && vetorNum[i] <= 20) {
            intervalo++
        } else {
            foraIntervalo++
        }
    }
    console.log(`${intervalo} vezes dentro do intervalo (10-20), ${foraIntervalo} vezes fora do intervalo(10-20)`)
}

vetor = [9, 10, 12, 13, 15, 17, 18, 20, 21]
intervalo(vetor)

// (y)