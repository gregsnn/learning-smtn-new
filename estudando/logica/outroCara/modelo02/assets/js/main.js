function passarData() {
  const agaUm = document.querySelector('.container h1')

  const date = new Date();
  getDate(date)

  function getDate() {

    const dayWeek = fixDayWeek(date.getDay());
    const day = fixNum(date.getDate());
    const month = fixMonth(date.getMonth());
    const year = date.getFullYear();
    const hour = fixNum(date.getHours());
    const minute = fixNum(date.getMinutes());

    return writeDownDate(dayWeek, day, month, year, hour, minute);
  }

  function fixNum(num) {
    return num >= 10 ? num : `0${num}`
  }

  function fixDayWeek(day) {
    const dayWeek = ['domingo', 'segunda-feira', 'terca-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado']

    return dayWeek[day]
  }

  function fixMonth(month) {
    const monthList = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    return monthList[month]
  }

  function writeDownDate(dW, d, m, y, h, mn) {
    return `${dW}, ${d} de ${m} de ${y} <br />
            ${h}:${mn}`
  }

  agaUm.innerHTML = getDate()
}
passarData()


// const h1 = document.querySelector('.container h1'); // mais rapido porem meio "preso no padrao".
// const data = new Date();
// h1.innerHTML = data.toLocaleString("pt", { 
//   dateStyle: "full",
//   timeStyle: "short"
// });
