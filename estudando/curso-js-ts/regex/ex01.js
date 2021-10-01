const { CPF, IP } = require('./base');

// ^ -> fora de colchetes simboliza (==COMECA COM==)
// $ -> simboliza (==TERMINA COM==)

console.log(CPF.match( /(\d{3}\.?){3}-\d{2}/g));

const RegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

console.log( IP);
console.log( IP.match(RegExp));


// repeated char
// let word = ['cassaa', 'jogandofoddaci', 'dancing ffezzess']

// for (let w of word) {
//   console.log(w.replace(/(.)\1{1,}/gi, '$1'));
// }
// hour
// let hora = "10:10"
// let upHora = "20"

// console.log(hora.replace(/(\w)(\w)/gi, function ($1, $2) {
//   return Number($1) + Number(upHora) || Number($2) + Number(upHora)
// }));