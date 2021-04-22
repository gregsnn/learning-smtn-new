const anoBisex = function(ano) {

    if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0 && ano % 100 == 0)) {
        return true
    } else {
        return false
    }
}

console.log(anoBisex(2021))
console.log(anoBisex(1400))
console.log(anoBisex(1992))
console.log(anoBisex(2000))

// (y)