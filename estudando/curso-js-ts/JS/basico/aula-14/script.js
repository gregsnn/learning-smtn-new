const nome = prompt('Digite o seu nome')
const certeza = confirm(`seu nome eh realmente ${nome}?`)
alert(`ola ${(certeza) == true ? nome : 'elu'}`)

