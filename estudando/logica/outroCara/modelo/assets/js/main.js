function calc() {
  const calc = document.querySelector('.calc');
  const resp = document.querySelector('.response');

  calc.addEventListener('submit', function (e) {
    e.preventDefault();
    sendResponse()
  })

  function getIMC() {
    const inputPeso = calc.querySelector('.peso');
    const inputAltura = calc.querySelector('.altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
      resp.className = 'badway'
      resp.innerHTML = `<p>Peso invalido</p>`;
      return;
    }
    if (!altura) {
      resp.className = 'badway'
      resp.innerHTML = `<p>Altura invalida</p>`;
      return;
    }

    return conta = peso / (altura * altura);
  }

  function sendResponse() {
    const conta = getIMC()
    
    let sts = ['Abaixo do peso ideal', 'Peso ideal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (conta < 18.5 && conta >= 0) {
      sts = sts[0]
      resp.className = 'lower'
    } else if (conta < 25) {
      sts = sts[1]
      resp.className = 'greater'
    } else if (conta < 30) {
      sts = sts[2]
      resp.className = 'above'
    } else if (conta < 35) {
      sts = sts[3]
      resp.className = 'ob1'
    } else if (conta < 40) {
      sts = sts[4]
      resp.className = 'ob2'
    } else {
      sts = sts[5]
      resp.className = 'ob3'
    }

    resp.innerHTML = `<p>SEU IMC EH: ${conta.toFixed(1)} (STATUS: ${sts})</p>`;
  };
}
calc();