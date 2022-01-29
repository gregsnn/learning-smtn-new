// 705.484.450-52 070.987.720-03
export default class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
    this.cpfLimpo = undefined;
  }

  isSequence() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  generateNewCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.generateDigit(cpfSemDigitos);
    const digito2 = ValidaCPF.generateDigit(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  static generateDigit(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for(let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }

  validate() {
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequence()) return false;
    this.generateNewCpf();

    return this.novoCPF === this.cpfLimpo;
  }
}
