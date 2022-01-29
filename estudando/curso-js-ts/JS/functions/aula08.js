// factory function
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome, // metodo
    sobrenome,
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`;
    },
    set nomeCompleto(v) { // setter
      v = v.split(' ');
      this.nome = v.shift();
      this.sobrenome = v.join(' ');
    },

    // fala(assunto) {
    //   return `${this.nome} tem o imc de ${this.imc}`;
    // },

    altura: a,
    peso: p,
    get imc() { // getter (queremos apenas obter o valor)
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'Miranda', 1.89, 80);
const p2 = criaPessoa('Alessandro', 'Otavio', 2.19, 120);
const p3 = criaPessoa('Log', 'aloha', 1.69, 60);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);