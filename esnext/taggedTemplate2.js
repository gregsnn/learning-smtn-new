function real(partes, ...valores) {
    const res = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        res.push(partes[indice], valor)
    })
    return res.join('')
}

const preco = 28.78
const parcelaPreco = 11

console.log(real `1x de ${preco} ou 3x de ${parcelaPreco}`)