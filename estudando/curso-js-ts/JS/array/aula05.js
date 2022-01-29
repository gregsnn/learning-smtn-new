// MAP -> altera valores do array

// dobre os numeros
const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const dobrandoNums = v => v * 2;

console.log(nums.map(dobrandoNums));

// para cada elemento:
// retorna apenas uma string com o nome da pessoa
// remove apenas a chave "nome" do objeto
// adicione uma chave id em cada obj
const pessoas = [
  { nome: 'Luiz', idade: 32 },
  { nome: 'Roberto', idade: 16 },
  { nome: 'Andrei', idade: 65 },
  { nome: 'Luiza', idade: 52 },
  { nome: 'Joao', idade: 76 },
  { nome: 'Drake', idade: 43 },
];

const stringMap = obj => obj.nome;

const removeNameMap = obj => {
  let newObj = { ...obj }
  newObj = delete newObj.nome && newObj;
  return newObj; 
} // ({ idade: obj.idade })

const addIdMap = (obj, indice) => {
  let newObj = { ...obj }
  newObj.id = indice + 1;
  return newObj;
}

console.log(pessoas);
console.log(pessoas.map(stringMap));
console.log(pessoas.map(removeNameMap));
console.log(pessoas.map(addIdMap));

// Criar novo objeto evita a mudanca no objeto inicial. { bom lembrar disso }