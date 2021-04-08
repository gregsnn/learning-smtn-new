function test1(numero) {
    if(numero > 7)
        console.log(numero)
        
    console.log('final')
}

// test1(6)
// test1(8)

function test2(numero) {
    if(numero > 7); { // cuidado com ";", não usar com estruturas de controle 
        console.log(numero)
    }
}

test2(6)
test2(9)