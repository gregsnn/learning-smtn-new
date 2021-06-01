const tec = new Map()
tec.set('react', { framework: false })
tec.set('angular', { framework: true })

console.log(tec.react) // não funciona desse forma
console.log(tec.get('react').framework)

const chavesVar = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVar.forEach((vl, ch) => {
    console.log(ch, vl)
})

chavesVar.delete(123)
console.log(chavesVar.has(123))
// lado da chave não aceita repetição, valor sim

console.log(chavesVar.size)