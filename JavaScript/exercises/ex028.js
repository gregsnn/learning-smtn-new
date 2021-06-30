function paresImpares(vetorNum) {
    let par = 0
    let impar = 0

    for(let i = 0; i < vetorNum.length; i++) {
        if (vetorNum[i] % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    console.log(`${par} Par, ${impar} Impar`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)
