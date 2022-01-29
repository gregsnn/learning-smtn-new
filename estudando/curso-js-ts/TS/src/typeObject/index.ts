const objetoA: {
  // or Record<string, unkown>
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valorA',
  chaveB: 'valorB',
};

// objetoA.chaveA = 'novoValor'; readonly nao se pode alterar
objetoA.chaveC = 'novoValor';
objetoA.chaveD = 'novoValor';

console.log(objetoA);
