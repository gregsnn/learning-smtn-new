function meuObj() { }
console.log(meuObj.prototype)

const obj1 = new meuObj
const obj2 = new meuObj
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObj.prototype === obj1.__proto__)

meuObj.prototype.nome = "Anon"
meuObj.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = "Fritz"
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObj.prototype
obj3.nome = "Douglas"
obj3.falar()

// resumindo
console.log((new meuObj).__proto__ === meuObj.prototype)
console.log(meuObj.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)