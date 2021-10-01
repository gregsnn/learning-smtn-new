const { CPF2 } = require('./base');

// ^ -> comeca com (diferente de [^])
// $ -> termina com
// m -> multiline (pos barra)

const CPFs = '123.123.052-12';

const CPF_RegExp = /^(\d{3}\.?){3}-\d{2}$/gm

console.log(CPF2.match(CPF_RegExp));