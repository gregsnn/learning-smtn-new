function between(num, min, max, inclusivo = false) {

    if(inclusivo) {
        return num >= min && num <= max
    }

    return num > min && num < max
}

console.log(between(15, 15, 20, true))
console.log(between(65, 15, 200, true))
console.log(between(11, 15, 16))
console.log(between(15, 15, 650))

// esperando revisão