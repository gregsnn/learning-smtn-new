function bhaskara(ax2, bx, c) {
    resultado = []

    let delta = (bx ** bx) - (4 * ax2 * c)

    if(delta < 0){
        return "Delta negativo"
    }

    let coef1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    let coef2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
    resultado.push(coef1)
    resultado.push(coef2)

    return resultado
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))

// (y)