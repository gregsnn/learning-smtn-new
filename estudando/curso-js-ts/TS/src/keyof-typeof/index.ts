type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
  rosa: 'pink',
};

function translateColor(cor: CoresChaves, cores: CoresObj): string {
  return cores[cor];
}

console.log(translateColor('vermelho', coresObj));
console.log(translateColor('verde', coresObj));
console.log(translateColor('rosa', coresObj));
