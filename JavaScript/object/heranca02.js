// cadeia de prototypes (prototype chain)
Object.prototype.attr0 = "Z" // evitar isso (impacta na estrutura toda)
const avo = { attr1: "A"}
const pai = { __proto__: avo, attr2: "B", attr3: "3"}
const filho = { __proto__: pai, attr3: "C"}  // sombreamento (ao encontrar o primerio attr ele ignora os demais que sejam iguais)

console.log(filho.attr1, filho.attr2, filho.attr3, filho.attr0)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual =+ delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: "f40",
    velMax: 324 // shadowing sobre obj.carro
}

const volvo = {
    modelo: "v40",
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) // primerio obj, depois prototipo
Object.setPrototypeOf(volvo, carro) // primerio obj, depois prototipo

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())