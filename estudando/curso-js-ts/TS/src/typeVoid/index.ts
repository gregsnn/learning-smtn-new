function semRetorno(...args: string[]): void {
  console.log(args.join('-'));
}

const pessoa = {
  nome: 'João',
  sobrenome: 'Silva',

  exibirNomeCompleto(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('Hello', 'TypeScript');
pessoa.exibirNomeCompleto();
export { pessoa };
