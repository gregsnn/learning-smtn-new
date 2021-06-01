for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntoECMA = [ 'MAP', 'SET', 'PROMISE']

for (let i in assuntoECMA) {
    console.log(i)
}

for (let assunto of assuntoECMA) {
    console.log(assunto)
}

const assuntoMap = new Map([
    [ 'Map', { abordado: true } ],
    [ 'Set', { abordado: true } ],
    [ 'Promise', { abordado: false } ]
])

for (let assunto of assuntoMap) {
    console.log(assunto)
}

for (let ch of assuntoMap.keys()) {
    console.log(ch)
}

for (let vl of assuntoMap.values()) {
    console.log(vl)
}

for (let [ch, vl] of assuntoMap.entries()) {
    console.log(ch, vl)
}

const s = new Set([ 'a', 'b', 'c' ])
for (let letra of s) {
    console.log(letra)
}