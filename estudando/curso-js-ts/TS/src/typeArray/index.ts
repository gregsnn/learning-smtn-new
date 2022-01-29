// Array<T> - T[]
export function multArgs(...args: Array<number>): number {
  return args.reduce((acc, curr) => acc * curr, 1);
}

export function concatString(...args: string[]) {
  return args.reduce((acc, curr) => acc + curr, '');
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((curr) => curr.toUpperCase());
}

const result = multArgs(1, 2, 3);
console.log(result);

const result2 = concatString('a', 'b', 'c');
console.log(result2);

const result3 = toUpperCase('a', 'b', 'c');
console.log(result3);
