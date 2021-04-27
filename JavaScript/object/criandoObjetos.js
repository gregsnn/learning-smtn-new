// usando a notação literal
const obj1 = {}
console.log(obj1)

// object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras
function prod(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new prod("caneta", 7.99, 0.15)
const p2 = new prod("notebook", 2597.88, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, salarioBase, faltas, getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("João", 1500, 4)
const f2 = criarFuncionario("Maria", 2700, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = "ana"
console.log(filha)

// uma função famosa que retorna objeto
const fromJSON = JSON.parse(`{"info": "Sou um JSON"}`)
console.log(fromJSON.info)