function revenda(modelo) {

    switch (modelo) {
        case "Hatch":
            return `Compra de ${modelo} efetuada com sucesso!`

        case "Sedans": case "Motocicletas": case "Caminhonetes":
            return `Tem certeza que não prefere esse modelo?`

        default:
            return "Não trabalhamos com esse tipo de automóvel aqui."
    }
}

console.log(revenda("Hatch"))
console.log(revenda("Sedans"))
console.log(revenda("Caminhonetes"))
console.log(revenda("Motocicletas"))
console.log(revenda("Bicicletas"))

// (y)