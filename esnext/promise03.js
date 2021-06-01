// setTimeout(function() {
//     console.log('exec callback')
// 
//     setTimeout(function() {
//         console.log('exec callback 2')
// 
//         setTimeout(function() {
//             console.log('exec callback 3')
// 
//         }, 2000)
//     }, 2000)
// }, 2000)

function waitingFor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('exec final')
            resolve()
        }, tempo)
    })
}

waitingFor()
    .then(() => waitingFor())
    .then(waitingFor)
