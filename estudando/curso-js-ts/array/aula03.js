const num1 = [ 1, 2, 3];
const num2 = [ 4, 5, 6];
const num3 = num1.concat(num2, 'luiz', [8, 8, 2]);
console.log(num3);

const concat = [...num1, ...num2, 'luiz', ...[8, 8, 2] ];
console.log(concat);