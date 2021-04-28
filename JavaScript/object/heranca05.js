console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split("").reverse().join("")
}

console.log("Escola Cod3r".reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 3, 5, 7].first())
console.log(["a", "b", "c", "d"].first())

String.prototype.toString = function() { // não substituir comportamentos globais que já existam. (burrice isso)
    return "Lascou tudo"
}

console.log("Escola Cod3r".reverse())