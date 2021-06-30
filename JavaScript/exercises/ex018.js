function numeros(extenso) {

    switch (extenso) {
        case "0": return "Zero"
        case "1": return "Um"
        case "2": return "Dois"
        case "3": return "Três"
        case "4": return "Quatro"
        case "5": return "Cinco"
        case "6": return "Seis"
        case "7": return "Sete"
        case "8": return "Oito"
        case "9": return "Nove"
        case "10": return "Dez"
        default: return "fora do intervalo"
    }
}

console.log(numeros("0"))
console.log(numeros("1"))
console.log(numeros("2"))
console.log(numeros("3"))
console.log(numeros("4"))
console.log(numeros("5"))
console.log(numeros("6"))
console.log(numeros("7"))
console.log(numeros("8"))
console.log(numeros("9"))
console.log(numeros("10"))
console.log(numeros("vish"))

// (y)