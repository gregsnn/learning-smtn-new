/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array */

function novoArray() {
    let array = ["Jonas", "Joana", "Fritz", "Frida"]

    let first = array.shift()
    let last  = array.pop()
    array = new Array(first, last)

    return array
}

console.log(novoArray())