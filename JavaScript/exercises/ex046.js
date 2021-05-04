function inverso(value) {
    const tipo = typeof value

    if (tipo == "boolean") {
        return !value
    } else if (tipo == "number") {
        return -value
    } else {
        return `Boolean ou Number esperados, parâmetro atual é do tipo ${tipo}`
    }
}

console.log(inverso(false))
console.log(inverso(-2000))
console.log(inverso(2542))
console.log(inverso("Frida Kahlo"))
