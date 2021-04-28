class lancamento {
    constructor(nome = "Anon", valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinans {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento("Salario", 45000)
const contaLuz = new lancamento("Luz", -5550)

const contas = new cicloFinans(12, 2021)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())