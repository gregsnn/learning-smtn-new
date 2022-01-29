// funcao construtora -> retorna objeto = precisa de "new" = new Pessoa
// funcao factory -> retorna objeto

function Pessoa (nome, sobrenome) {
  const ID = 123; // metodo interno (nao disponivel fora da funcao) ATRIBUTO/METODO PRIVADO
  const metodoInterno = () => {

  };

  // ATRIBUTOS/METODOS PUBLICOS
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(`${this.nome}: IM A GENIOUS`);
  };
}

const p1 = new Pessoa('luiz', 'gustavo');
const p2 = new Pessoa('maria', 'joana');
console.log(p1.nome, p2.sobrenome);
p2.metodo();