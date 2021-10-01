const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);
const bgBody = stylesBody.backgroundColor;
console.log(bgBody);

for (let p of ps) {
  p.style.backgroundColor = bgBody; 
  p.style.backgroundColor === bgBody ? p.style.color = '#FFFFFF' : '#000000';
}