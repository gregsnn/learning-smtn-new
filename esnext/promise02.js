const first = arrayOuString => arrayOuString[0]
const wordMin = letra => letra.toLowerCase()

let p = new Promise( function(resolve) { // pode gerar objeto, lista...
    resolve(['Ana', 'Bia', 'Joao'])
})
    .then(first)
    .then(first)
    .then(wordMin)
    .then(console.log)
