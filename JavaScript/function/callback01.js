const fabricantes = ["mercedes", "audi", "bmw"]

function print(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(print)
fabricantes.forEach(fabricante => console.log(fabricante))