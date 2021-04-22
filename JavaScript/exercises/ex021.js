function planoSaude (pessoa) {
    let todosPagam = 100

    if (pessoa < 10) {
        return todosPagam += 80
    } else if (pessoa < 30) {
        return todosPagam += 50
    } else if (pessoa < 60) {
        return todosPagam += 95
    } else {
        return todosPagam += 130
    }
}

console.log(`R$` + planoSaude(5).toFixed(2))
console.log(`R$` + planoSaude(25).toFixed(2))
console.log(`R$` + planoSaude(45).toFixed(2))
console.log(`R$` + planoSaude(75).toFixed(2))

// (y)