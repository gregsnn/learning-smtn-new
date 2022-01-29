enum Cores {
  VERMELHO = 5,
  AZUL,
  AMARELO,
}

enum Cores {
  ROSA,
  ROXO,
}

console.log(Cores);
console.log(Cores.VERMELHO);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.VERMELHO);
