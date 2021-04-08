const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in numero) {
    if(x == 5) break

    console.log(`${x} = ${numero[x]}`)
}

for(let y in numero) {
    if(y == 5) continue

    console.log(`${y} = ${numero[y]}`)
}

externo: for(let a in numero) {
    for(let b in numero) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}