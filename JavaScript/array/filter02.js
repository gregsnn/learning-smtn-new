Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const prod = [
    { nome: 'Notebook', preco: 2500, fragil: true },
    { nome: 'iPad PRO', preco: 4100, fragil: true },
    { nome: 'Copo de Vidro', preco: 5.00, fragil: true },
    { nome: 'Copo de Plástico', preco: 2.00, fragil: false }
]

const fragil = prod => prod.fragil
const caro = prod => prod.preco >= 1000

console.log(prod.filter2(fragil).filter2(caro))