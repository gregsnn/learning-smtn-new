const element = [
  { tag: 'p', texto: 'MIAAAAAAAAAAAAAAAAAAAAAAAAAAAU' }, // 0
  { tag: 'div', texto: 'frase 2' }, // 1
  { tag: 'footer', texto: 'frase 3' }, // 2
  { tag: 'section', texto: 'frase 4' }, // 3
]
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < element.length; i++) {
  let { tag, texto } = element[i];
  let elementTag = document.createElement(tag);
  let elementText = document.createTextNode(texto);

  elementTag.appendChild(elementText);
  div.appendChild(elementTag);
}

container.appendChild(div)