// g = global (encontra todas)
// i = insensitive (case insensitive)
// () = groups
// | = or

const { TEXT } = require('./base');

const RegExp = /(maria|joao|guiz)?(, hoje sua esposa)/gi;
const FOUND = RegExp.exec(TEXT);

if (!!FOUND) {
  console.log(FOUND[0]);
  console.log(FOUND[1]);
  console.log(FOUND[2]);
}
// console.log(RegExp.test(TEXT));