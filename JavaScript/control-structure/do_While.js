function randomInt(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = randomInt(-1, 10)
    console.log(`opção escolhida ${opcao}.`)
} while (opcao != -1)

console.log(`até a próxima`)