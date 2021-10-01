function getDiaSemanaTexto(diaCondicao) {
  let diaSemanaTexto;

  switch (diaCondicao) {
    case 0: return diaSemanaTexto = `Domingo`;
    case 1: return diaSemanaTexto = `Segunda`;
    case 2: return diaSemanaTexto = `Terca`;
    case 3: return diaSemanaTexto = `Quarta`;
    case 4: return diaSemanaTexto = `Quinta`;
    case 5: return diaSemanaTexto = `Sexta`;
    case 6: return diaSemanaTexto = `Sabado`;
    default: return diaSemanaTexto = `Dia Invalido`;
  }
}

const data = new Date();
const diaSemana = data.getDay() + 3;
let diaCondicao = diaSemana % 7;

const diaSemanaTexto = getDiaSemanaTexto(diaCondicao) // funciona sem

console.log(diaSemanaTexto);