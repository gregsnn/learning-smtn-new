/*
JavaScript eh baseado em prototipos para passar propriedades e metodos de um objeto para outro.

Definicao de Prototipo:
  -> Prototipo eh o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras producoes.

Todo os Objetos tem uma referencia interna para um prototipo (__proto__) quem vem da propriedade "Prototype" da funcao construtora que foi usada para cria-lo. Quando tentamos acessar um mebro de um obj, primeiro o motor do JS vai tentar encontrar este membro no proprio obj e depois a cadeia de prototipos eh usada ate o topo (null), ate encontrar (ou nao) tal membro.
*/

// Construtora -> molde (class)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}
// Pessoa.prototype === p1__proto__

// instancia
const p1 = new Pessoa('Luiz', 'O.') // <- Pessoa
const p2 = new Pessoa('Maria', 'A.') // <- Pessoa

Pessoa.prototype.fullName = function () { // obrigatorio o uso de funcoes anonimas (arrow function nao funciona)
  `${this.nome} ${this.sobrenome}`;
}
p1.fullName();
const data = new Date();

console.log(p1);
console.log(data);