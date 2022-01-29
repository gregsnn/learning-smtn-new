const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type FilterCallback<U> = (element: U, index?: number, array?: U[]) => boolean;

function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray: T[] = [];

  for (const i in array) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const arrayFiltradoOriginal = array.filter((value) => value < 5);

const arrayFiltrado = meuFilter(array, (value) => value < 5);

console.log(arrayFiltradoOriginal);
console.log(arrayFiltrado);

export default 1;
