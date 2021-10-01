function relogio() {
  function criaHoraDosSegundos(segundos) {
    const DATA = new Date(segundos * 1000);
    return DATA.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const RELOGIO = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      RELOGIO.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const EL = e.target;

    if (EL.classList.contains('zerar')) {
      clearInterval(timer);
      RELOGIO.innerHTML = '00:00:00';
      RELOGIO.classList.remove('pausado');
      segundos = 0;
    }

    if (EL.classList.contains('iniciar')) {
      RELOGIO.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (EL.classList.contains('pausar')) {
      clearInterval(timer);
      RELOGIO.classList.add('pausado');
    }
  });
}
relogio();