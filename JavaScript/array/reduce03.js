Array.prototype.reduce2 = function(callback, valorInit) {
    const indiceInit = valorInit ? 0 : 1
    let acumulador = valorInit || this[0]
    for(let i = indiceInit; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))