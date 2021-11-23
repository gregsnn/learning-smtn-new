// validacao de CPF
// -> 705.484.450-52 || 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 15 15 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10

11 - (237 % 11) = 5 (orimeiro digito) -> se o digito for maior do que 9, considera-se como zero
11 - (284 % 11) = 2 (primeiro digito)
705.484.450-(52) === 705.484.450-52 -> CPF valido
*/

// let cpf = '705.484.450-52'
// let cpfLimpo = cpf.replace(/\D+/gi, '')
// let cpfArray = Array.from(cpfLimpo)

function ValidaCPF (cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/gi, '');
    }
  });
}
ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return 'falso1';
  if (this.cpfLimpo.length !== 11) return 'falso2';
  if (this.isSequencia()) return false

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1)

  const novoCpf = cpfParcial + digito1 + digito2;

  return novoCpf === this.cpfLimpo
};
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;

  const total = cpfArray.reduce((acc, val) => {
    acc += (regressivo * Number(val));
    regressivo--;
    return acc
  }, 0);

  const digito = 11 - (total % 11)
  return digito > 9 ? '0' : String(digito);
};
ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('705.484.450-52');
const cpf2 = new ValidaCPF('111.111.111-11');
const cpf3 = new ValidaCPF('725.684.430-56');

if (cpf.valida()) {
  console.log('cpf valido');
} else {
  console.log('cpf invalido');
}

if (cpf2.valida()) {
  console.log('cpf valido');
} else {
  console.log('cpf invalido');
}

if (cpf3.valida()) {
  console.log('cpf valido');
} else {
  console.log('cpf invalido');
}