// TUPLE
const dadosCliente: readonly [number, string] = [1, 'Pedro']; // array com valor fixo
const dadosCliente2: [number, string, string?] = [1, 'Pedro', 'Damon'];
const dadosCliente3: [number, string, ...string[]] = [1, 'Pedro', 'Damon', 'Santos'];

// dadosCliente[0] = 500;
// dadosCliente[1] = 'Greg';
// dadosCliente.pop(); // typescript n reconhece o comportamento de pop e push -- readonly impede isso

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);

// ReadOnly Array
const array: readonly string[] = ['a', 'b', 'c'];
const array2: ReadonlyArray<string> = ['a', 'b', 'c'];

console.log(array);
console.log(array2);
