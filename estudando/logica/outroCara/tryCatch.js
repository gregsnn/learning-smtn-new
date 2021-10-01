function sum(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser numeros.');
  } // Error / ReferenceError etc...
  return x + y
}

try {
  console.log(sum(1, 2));
  console.log(sum(1, '1'));
} catch (error) {
  // console.log(error);
  console.log('lancar algo amigavel para o usuario');
}