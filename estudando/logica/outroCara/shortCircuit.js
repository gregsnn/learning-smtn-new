/**
 * AVALIAM EM FALSY: RETORNA ULTIMO VALOR AVALIADO em true OU primeiro em false
 * - false
 * - 0
 * - '' / "" / ``
 * - null / undefined
 * - NaN
 * * * * * * * * * * *
 * DENTRO DE OR(||): RETORNA PRIMEIRO VALOR AVALIADO em true OU ultimo em false
 */
function oi() {
  return 'Oi';
};
let vaiExec = 'LOLI';

console.log(vaiExec && oi());

const a = 0;
const b = null;
const c = false;
const d = 'falso'; // contem valor = true
const e = NaN;
console.log(a || b || c || d || 'Joao' || e);