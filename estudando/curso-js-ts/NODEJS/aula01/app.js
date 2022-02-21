// const { nome, sobrenome, falaNome } = require('./mod1');

// console.log(falaNome('João', 'Silva'));

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

const p1 = new Pessoa('João');
console.log(p1);

// @ts-ignore
axios('https://otaviomirando.com.br/files/json/pessoas.json')
  .then(response => response.data)
  .catch(e => console.log(e))
