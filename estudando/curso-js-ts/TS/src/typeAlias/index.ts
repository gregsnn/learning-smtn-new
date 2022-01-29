type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Greg',
  idade: 21,
  salario: 100_000, // cem mil
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return {
    ...pessoa,
    corPreferida: cor,
  };
}

console.log(pessoa);
console.log(setCorPreferida(pessoa, 'Magenta'));
