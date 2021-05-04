/* Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário. */

function triangulo(base, altura) {
    const soma = (base * altura) / 2
    return soma.toFixed(2)
}

console.log(triangulo(10, 15))
console.log(triangulo(7, 9))
console.log(triangulo(9.25, 13.1))