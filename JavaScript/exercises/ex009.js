const notasAlunos = function (notas) {

    let notaRadius = arredondar(notas)

    if (notas < 40) {
        return "Reprovado: " + notas
    } else {
        return "Aprovado: " + notaRadius
    }
}

function arredondar (notas) {
    if (notas % 5 > 2) {
        return notas + (5 - (notas % 5))
    } else {
        return notas
    }
}

console.log(notasAlunos(100))
console.log(notasAlunos(30))
console.log(notasAlunos(38))
console.log(notasAlunos(88))
console.log(notasAlunos(61))

// (y)