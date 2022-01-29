function unirObjs<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return Object.assign({}, obj1, obj2);
  // return { ...obj1, ...obj2 };
}

const obj1 = {
  nome: 'Luiz',
};
const obj2 = {
  idade: 20,
};

const uniao = unirObjs(obj1, obj2);

console.log(uniao);
