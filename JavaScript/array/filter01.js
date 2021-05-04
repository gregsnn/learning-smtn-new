const prod = [
    { nome: 'Notebook', preco: 2500, fragil: true },
    { nome: 'iPad PRO', preco: 4100, fragil: true },
    { nome: 'Copo de Vidro', preco: 5.00, fragil: true },
    { nome: 'Copo de Plástico', preco: 2.00, fragil: false }
]

const fragil = prod => prod.fragil
const caro = prod => prod.preco >= 1000

console.log(prod.filter(fragil).filter(caro))