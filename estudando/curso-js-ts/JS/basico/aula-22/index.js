// Primitivos (imutaveis) = string, number, boolean, undefined, null (bigint - symbol (ainda n aprendi)) = valores sao copiados
// Referencia (mutavel) = array, object, function = valores sao referenciados

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;
// console.log(a, b);

// b.push(1);
// console.log(b);

// a.pop(1);
// console.log(a);

// c.shift(3)
// console.log(c)

const pessoa = {
  nome: 'luiz', sobrenome: 'luiz',
  obj: {
    aluno: 'loez', nota: 10
  }
};
const b = {...pessoa.obj};

pessoa.obj.aluno = 'gabriel';

console.log(b.aluno);