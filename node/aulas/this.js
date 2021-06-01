console.log(this === global) // this aponta pra module.exports
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('dentro de uma função')
    console.log(this === exports) // dentro de uma função "THIS" não aponta para "EXPORTS/MODULE.EXPORTS"
    console.log(this === module.exports)
    
    console.log(this === global)
}

// this dentro de função aponta para global e fora aponta para exports
logThis()