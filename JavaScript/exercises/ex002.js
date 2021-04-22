const triangulo = function(a, b, c) {

    if(a == b && a == c) {
        return "equilatero"
    } else if ((a == b || a == c || b == c)) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

console.log(triangulo(2, 2, 2))
console.log(triangulo(2, 3, 3))
console.log(triangulo(2, 3, 4))

// (y)