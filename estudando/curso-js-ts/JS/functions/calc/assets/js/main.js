// factory function
// function criaCalculadora () {
//   return {
//     display: document.querySelector('.display'),

//     inicia () {
//       this.cliqueBotoes();
//       this.pressionaEnter();
//     },

//     pressionaEnter () {
//       this.display.addEventListener('keyup', e => {
//         if (e.keyCode === 13) {
//           this.realizaConta();
//         }
//       });
//     },

//     realizaConta () {
//       let conta = this.display.value;

//       try {
//         conta = eval(conta);

//         if (!conta) {
//           alert('Conta inválida');
//           return;
//         }

//         this.display.value = String(conta);
//       } catch (e) {
//         alert('Conta inválida');
//         return;
//       }
//     },

//     clearDisplay () {
//       this.display.value = '';
//     },

//     apagaUm () {
//       this.display.value = this.display.value.slice(0, -1);
//     },

//     cliqueBotoes () {
//       // (:antes do document:) this -> calculadora
//       // (:apos document:) this -> document
//       // arrow function nao muda o comportamento do this
//       document.addEventListener('click', e => {
//         const el = e.target;

//         if (el.classList.contains('btn-num')) {
//           this.btnParaDisplay(el.innerText);
//         }

//         if (el.classList.contains('btn-clear')) {
//           this.clearDisplay();
//         }

//         if (el.classList.contains('btn-del')) {
//           this.apagaUm();
//         }

//         if (el.classList.contains('btn-eq')) {
//           this.realizaConta();
//         }
//       });
//     },

//     btnParaDisplay (valor) {
//       this.display.value += valor;
//     }

//   };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia();


// constructor function
function Calculadora () {

  this.display = document.querySelector('.display');

  this.inicialize = () => {
    this.clickBtn();
    this.clickEnter();
  }
  
  this.clear = () => this.display.value = '';
  
  this.del = () => this.display.value = this.display.value.slice(0, -1);
  
  this.btnToDisplay = (value) => {
    this.display.value += value;
    this.display.focus();
  }
  
  this.realizeMath = () => {
    try {
      const calc = eval(this.display.value);

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

  this.clickEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        this.realizeMath();
      }
    });
  };

  this.clickBtn = () => {
    document.addEventListener('click', e => {
      const el = e.target;

      if (el.classList.contains('btn-num')) this.btnToDisplay(el.innerText);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizeMath();
    });
  }
}

const calc = new Calculadora();
calc.inicialize();
