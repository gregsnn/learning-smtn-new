function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b, c) => a < b && a < c ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${mediaFinal.toFixed(2)} - ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 5, 5, 5)
