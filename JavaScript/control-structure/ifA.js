// function goodNews(nota) {
//     if(nota >= 7) {
//         console.log('Aprovado com ' + nota)
//     } else {
//         console.log('Reprovado com ' + nota)
//     }
// }
// 
// goodNews(9.1)
// goodNews(6.3)

function ifItWasTrue(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

ifItWasTrue()
ifItWasTrue(null)
ifItWasTrue(undefined)
ifItWasTrue(NaN)
ifItWasTrue('')
ifItWasTrue(0)
ifItWasTrue(-1)
ifItWasTrue(' ')
ifItWasTrue('?')
ifItWasTrue([])
ifItWasTrue([1, 2])
ifItWasTrue({})