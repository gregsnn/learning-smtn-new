function random(min, max) {
  const R = Math.random() * (max - min)  + min;
  return Math.floor(R);
}

const MIN = 1
const MAX = 20
let rand = random(MIN, MAX);

console.log(rand);

while (rand !== 10) {
  rand = random(MIN, MAX)
  console.log(rand);
}

do {
  rand = random(MIN, MAX)
  console.log(rand);
} while (rand !== 10)