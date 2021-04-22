function frutas(blocksFruit) {

    switch (blocksFruit) {
        case "maçã":
            console.log("Não vendemos esta fruta aqui")
            break
        case "kiwi":
            console.log("Estamos com escassez de Kiwis")
            break
        case "melância":
            console.log("Aqui está, são 3 reais o quilo")
            break
        default:
            console.log("Inválido")
    }   
}

frutas("maçã")
frutas("kiwi")
frutas("melância")
frutas("bah")

// (y)