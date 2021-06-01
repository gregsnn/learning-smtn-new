// não aceita repetição e não é indexado
const times = new Set()
times.add('vasco')
times.add('gremio').add('inter').add('juventude').add('brasil de pelotas')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))

times.delete('inter')
console.log(times.has('inter'))

const nomes = ['Raquel', 'Lucas', 'Normie', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)