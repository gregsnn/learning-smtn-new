//                       a, m, d, h, min, seg, milesimo de segundo
// const data = new Date(2000, 2, 1, 19, 45, 00); // 01/01/1970 - Timestamp unix
// tem que ter ao menos 2 parametros (apenas 1 eh considerado milisegundos)

// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth()); // mes comeca do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Milesimos de Segundos', data.getMilliseconds());
// console.log('Dia da Semana', data.getDay()); // 0 domingo - 6 sabado

// console.log(Date.now());
function zeroLeft(num) {
  return num >= 10 ? num : `0${num}`
}

function formataData(data) {
  const dia = zeroLeft(data.getDate());
  const mes = zeroLeft(data.getMonth() + 1);
  const ano = zeroLeft(data.getFullYear());
  const hora = zeroLeft(data.getHours());
  const min = zeroLeft(data.getMinutes());
  const seg = zeroLeft(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBr = formataData(data);
console.log(dataBr);