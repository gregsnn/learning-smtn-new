// let e const
{
    var a = 2
    let b = 3 // let tem escopo de bloco
    console.log(b)
}

console.log(a)
 
// template string
const prod = 'iPad'
console.log(`${prod} é caro!`) // permite quebra de linha

// destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { nome: n, idade: i } = { nome: 'Ana', idade: 54}
console.log(n, i)