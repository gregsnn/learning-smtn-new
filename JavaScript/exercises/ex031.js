function negativo(vetorNum) {
    let negativo = 0

    for (let i = 0; i < vetorNum.length; i++) {
        if (vetorNum[i] < 0) {
            negativo++
        }
    }
    console.log(`${negativo} ${negativo > 1 ? "Negativos" : "Negativo"}`)
}

vetor = [0, 1, 2, 3, 4, 5, -6, 7, 8, -9, 10, -11, -12, 13]
negativo(vetor)

// (y)