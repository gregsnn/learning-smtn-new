function waitingFor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, tempo)
    })
}

// waitingFor(2000)
//     .then(waitingFor)
//     .then(waitingFor)

// function retornarValor() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(10), 5000)
//     })
// }

async function retornarValorRapido() {
    return 20
}


async function exec() {
    let valor = await retornarValorRapido()

    await waitingFor(2000)
    console.log(`Async/Await ${valor}`)

    await waitingFor(1500)
    console.log(`Async/Await ${valor + 1}`)

    await waitingFor(1500)
    console.log(`Async/Await ${valor + 2}`)

    return valor + 3
}

async function executamo() {
    const valor = await exec()
    console.log(valor) 
}

executamo()


// exec().then(console.log)