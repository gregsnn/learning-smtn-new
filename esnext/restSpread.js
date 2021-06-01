// operador ...rest(juntar)/spread(espalhar)
// usar rest com parametro de função

// usar spread com objeto
const funcionarios = { nome: 'Maria', salario: 1234.56 }
const clone = { ativo: true, ...funcionarios }
console.log(clone)

// usar spread com array 
const grupoA = ['Joao', 'Pedro', 'Marcia']
const grupoFinal = [ 'Maria', ...grupoA, 'Fael']
console.log(grupoFinal)

// quando trabalhando com atributos você espalha e não junta.