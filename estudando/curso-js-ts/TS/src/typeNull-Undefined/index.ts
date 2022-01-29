let x;
if (typeof x === 'undefined') x = 20;
console.log(x);

export function createPerson(firstName: string, lastName?: string): { firstName: string; lastName?: string } {
  return {
    firstName,
    lastName,
  };
}

console.log(createPerson('Pedro'));
console.log(createPerson('Pedro', 'Santos'));

export function squareOf(x: unknown) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwo = squareOf(2);
const squareOfTwoString = squareOf('3');

if (squareOfTwoString === null) {
  console.error('Conta Invalida');
} else {
  console.log(squareOfTwoString * 2);
}

console.log(squareOfTwo);
console.log(squareOfTwoString);
