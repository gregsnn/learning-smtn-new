// @ts-nocheck
// const mult = require('./mod1');
// const add = require('./mod1');
// const sub = require('./mod1');
// const div = require('./mod1');

// console.log(mult(5, 3, '*'));
// console.log(add(3, 3, '+'));
// console.log(sub(10, 3, '-'));
// console.log(div(15, 3, '/'));

// const Dog = require('./mod1');

// const dog = new Dog('Rex');

// dog.bark();

// console.log(__filename);
// console.log(__dirname);

// const path = require('path');
// console.log(path.resolve(__dirname, '../../arquivos/images'));

const Cachorro = require('./mod1.js');

const dog = new Cachorro('Rex');
dog.bark();