const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']

const todos = filhas.concat(filhos, 'Fulano')

console.log(todos.sort(), filhas, filhos)

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]])) // gera novo array, não muda o original