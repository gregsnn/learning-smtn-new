type MeuTipo = number;

const arrayNumeros: Array<number> = [1, 2, 3, 4, 5];
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<MeuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

promiseAsync().then((value) => console.log(value));

minhaPromise().then((value) => console.log(value));
