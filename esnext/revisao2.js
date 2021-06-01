// arrow function
const soma = (a, b) => a + b // quando só tem 1 param não é necessario colocar entre parenteses -- e se for adicionado um corpo a função ele requer o return para retornar a resposta.
console.log(soma(1, 2))

// arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = () => lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(text = "node") {
    console.log(text)
}

log("mais forte than padrão, mas 'null' é mais ainda")

// operador rest
function total(...numeros) {  // operador que agrupa paramentros passados.
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4,5))