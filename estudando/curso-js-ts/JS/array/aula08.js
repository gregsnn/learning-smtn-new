// forEach -> apenas para arrays
const a1 = [11, 22, 33]

for (let v of a1) {
  console.log('forOf:', v);
}

let total = 0
a1.forEach((valor, indice, array ) => {
  total += valor
});

console.log(total);