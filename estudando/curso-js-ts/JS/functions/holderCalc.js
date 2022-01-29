function Calculadora () {

  this.display = document.querySelector('.display');

  this.Inicia = () => {
    this.ClickBtn();
    this.ClickEnter();
  }

  this.ClickEnter = () => {
    this.display.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizeMath();
      }
    });
  };

  this.realizeMath = () => {
    let calc = this.display.value;

    try {
      calc = Number(calc);

      if (!calc) {
        alert('Invalid Calc');
        return;
      }

      this.display.value = String(calc);
    } catch (error) {
      alert('Invalid Calc');
      return;
    };
  };

  this.Clear = () => {
    this.display.value = '';
  };

  this.Del = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.BtnToDisplay = (value) => {
    this.display.value += value;
  }

  this.ClickBtn = () => {
    document.addEventListener('click', e => {
      const el = e.target;

      if (el.classList.contains('btn-num')) {
        this.BtnToDisplay(el.innerText);
      }

      if (el.classList.contains('btn-clear')) {
        this.Clear();
      }

      if (el.classList.contains('btn-del')) {
        this.Del();
      }

      if (el.classList.contains('btn-eq')) {
        this.realizeMath();
      }
    });
  }
}

calc = new Calculadora
calc.Inicia()