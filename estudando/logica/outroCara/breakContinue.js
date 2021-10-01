const NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// continua  = pula para a proxima iteracao
// break = sai da iteracao

for (let i in NUMEROS) {
  let num = NUMEROS[i]

  if (num === 5) continue;

  console.log(num);

  if (num === 8) break;
}

let i1 = 0
while (i1 < NUMEROS.length) {
  let num = NUMEROS[i1]

  if (num === 5) {
    i1++;
    continue;
  }

  console.log(num);

  if (num === 8) break;

  i1++
}

let i2 = 0
do {
  let num = NUMEROS[i2]

  if (num === 3) {
    i2++
    continue;
  }

  console.log(num);

  if (num === 8) {
    break;
  };

  i2++;
} while (i2 < NUMEROS.length)