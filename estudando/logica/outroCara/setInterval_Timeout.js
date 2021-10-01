function hour() {
  let data = new Date()

  return data.toLocaleString('pt', {
    hour12: false
  });
}

const TIMER = setInterval(function () {
  console.log(hour());
}, 1000);

setTimeout(function () {
  clearInterval(TIMER)
}, 3500)

setTimeout(function () {
  console.log('Hello World!');
}, 5000)