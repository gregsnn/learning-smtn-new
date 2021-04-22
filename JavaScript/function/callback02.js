const notas = [7.7, 5.5, 9.9, 4.4, 2.2, 8.8, 1.1]

// sem callback
let notasBaixas = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback
notasBaixas = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas)

const notasMuitoBaixas = nota => nota < 7 // permite reutilizar função
notasBaixas2 = notas.filter(notasMuitoBaixas)
console.log(notasBaixas2)
/*const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas)*/