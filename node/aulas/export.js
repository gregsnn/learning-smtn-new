console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Test'
}

console.log(module.exports)

module.exports = { publico: true } // NOVO OBJETO REQUER USO DE "MODULE.EXPORTS" ("THIS" / "EXPORTS" APENAS SÃO APONTAS POR "MODULE.EXPORTS")