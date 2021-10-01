const num = Math.random() * 30;

if (num >= 0 && num <= 10) {
  console.log('Entre 0 e 10');
} else if (num <= 15){
  console.log('Entre 11 e 15');
} else if (num <= 20) {
  console.log('entre 16 e 20');
} else {
  console.log('Fora do range');
}