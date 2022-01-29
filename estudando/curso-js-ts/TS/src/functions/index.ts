type MapStringsCallback = (item: string) => string;

function mapString(array: string[], callbackFn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (const i in array) {
    const item = array[i];
    newArray.push(callbackFn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcMapped);

export default 1;
