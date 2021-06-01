const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function saveProd(prod) {
    if(!prod.id) prod.id = sequence.id

    produtos[prod.id] = prod
    return prod
}

function getProd(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function delProdutos(id) {
    const prod = produtos[id]
    delete produtos[id]
    return prod
}

module.exports = { saveProd, getProd, getProdutos, delProdutos }