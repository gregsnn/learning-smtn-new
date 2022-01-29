export function isNumber(value: unknown): value is number {
  return typeof value === 'number'; // sempre que boolean for true -> valor sera number
}

console.log(isNumber(1));
console.log(isNumber('1'));

export function sum<T>(...args: T[]): number {
  const total = args.reduce((acc, curr) => {
    if (isNumber(acc) && isNumber(curr)) {
      return acc + curr;
    }

    return acc;
  }, 0);

  return total;
}

console.log(sum(1, 2, 3));
// console.log(sum(1, 2, '3')); -- not working
console.log(sum('a', 'b', 'c'));
console.log(sum(...[1, 2, 'c', 'd']));
