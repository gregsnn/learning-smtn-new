function planoSalario(plano ,salario) {

    switch (plano) {
        case "A":
            return salario * 110 / 100
        case "B":
            return salario * 115 / 100
        case "C":
            return salario * 120 / 100
        default:
            return "Plano Inválido";
    }
}

console.log(planoSalario("A", 1000))
console.log(planoSalario("B", 1000))
console.log(planoSalario("C", 1000))
console.log(planoSalario("Fritz e Frida", 5000))

// (y)