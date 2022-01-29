const nome = 'greg'

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'bill';
  falaNome();
}
usaFalaNome();