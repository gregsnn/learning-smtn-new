console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paula' // mais usado para substituir
aprovados.push('Abia') // mais usado para adicionaer
console.log(aprovados.length)

aprovados[9] = 'Gargamel'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 1, 'elemen1', 'elemen2') // (indice, quantidade, adicionar elemento a partir do indice++)
console.log(aprovados)