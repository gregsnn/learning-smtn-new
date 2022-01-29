const { TEXT, FILES } = require('./base');

// * (0 ou mais) {0, }
// + (1 ou mais) {1, }
// ? (0 ou 1) {0, 1}
// \ (caractere de escape)
// {min, max}

// const RegExp = /jo+ao+/gi;
// console.log(TEXT.match(RegExp));

const RegExp2 = /\.jp(e)?g/gi;

for (const FILE of FILES) {
  const isVALID = FILE.match(RegExp2);

  if (!isVALID) continue;

  console.log(FILE, FILE.match(RegExp2));
}