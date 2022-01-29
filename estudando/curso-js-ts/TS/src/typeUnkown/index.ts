let x: unknown;
x = 1;
x = '1';
x = true;
x = {};
x = [];
x = 10;

const y = 800;
if (typeof x === 'number') {
  console.log(x + y);
}
