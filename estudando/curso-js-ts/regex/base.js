const TEXT = `
Joao trouxe  flores para a sua amada namorada em 10 de janeiro de 1970, Maria era o nome dela.

Foi um ano execelente na vida de joao. Teve 5 filhos, todos adultos atualmente. Maria, hoje sua esposa, ainda faz aquele cafe com pao de queijo nas tardes de domingo. Tambem ne! Sendo a boa mineira que e, nunca esquece seu famoso pao de queijo.
Nao canso de ouvir a Maria:
"Joooooooooaooooo, o cade ta prontinho aqui, Veeeem!"`;

const FILES = [
  'Atencao.jpg',
  'FOTO.jpeg',
  'Meu Gatinho.jpg',
  'Meu Gatinho.JPG',
  'Meu Gatinho.JPEG',
  'Marido.png',
  'lista de compras.txt'
];

const CPF = `
  os CPFs sao:

  123.123.052-12 

  421.753.012-59 

  154.163.152-75 

  763.167.076-37

  0123-123.176_12
`;

const CPF2 = `
123.123.052-12
421.753.012-59
154.163.152-75
763.167.076-37
0123-123.176_12`

const IP = `
  os IPs sao:

  0.0.0.0

  192.168.1.12

  10.10.5.12

  255.255.255.255

  555-999.123.1
`;

const HTML = '<p>Hello World!</p> <p>Hello again!</p>'
const HTML2 = `<p>Hello World!</p> <div>Hello again!</div>
  <p 
  class="teste"
  data-teste="teste"
  >
  Hello World!
  </p>`

const LOOKAHEAD = `
  ONLINE  192.168.0.1 ABCDEF inactive
  OFFLINE  192.168.0.2 ABCDEF active
  ONLINE  192.168.0.3 ABCDEF active
  ONLINE  192.168.0.4 ABCDEF active
  OFFLINE  192.168.0.5 ABCDEF active
  OFFLINE  192.168.0.6 ABCDEF inactive
`;

const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ abcdefghijklmnopqrstuvxwyz 0123456789';

module.exports = {
  TEXT,
  FILES,
  ALFABETO,
  CPF,
  CPF2,
  IP,
  HTML,
  HTML2,
  LOOKAHEAD
}