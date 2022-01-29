const { TEXT } = require('./base');

const RegExp = /(joao|maria)/gi;
//                      grupos sao sequenciais

// console.log(TEXT);
console.log(TEXT.match(RegExp));
// console.log(TEXT.replace(RegExp, '<strong>$1</strong>'));
console.log(TEXT.replace(RegExp, function (input) {
  return input.toUpperCase();
}));