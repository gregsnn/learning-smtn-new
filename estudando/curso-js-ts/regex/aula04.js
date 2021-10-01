const { ALFABETO } = require('./base');

// [] = conjunto / [^] = negacao
// [ - ] = range

console.log(ALFABETO);
console.log(ALFABETO.match(/[^a-zA-z0-9]+/g));
console.log(ALFABETO.match(/[\u00AA-\u00BA]+/g));
console.log(ALFABETO.match(/[a-zA-Z0-9]+/g));
console.log(ALFABETO.match(/\w+\W+/g));
console.log(ALFABETO.match(/\d+/g));
console.log(ALFABETO.match(/\D+/g));
console.log(ALFABETO.match(/\s+/g));
console.log(ALFABETO.match(/\S+/g));