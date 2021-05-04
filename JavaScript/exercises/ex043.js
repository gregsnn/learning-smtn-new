function salario(horasTrabMes, recebePorHora) {
    let bruto = horasTrabMes * recebePorHora
    const liquido = bruto - (bruto * 30/100)

    return `Salário é igual a R$${liquido.toFixed(2).replace(".", ",")}`
}

console.log(salario(180, 60))
console.log(salario(120, 50.5))
