const nome = 'Greg';
const sobrenome = "Nunes";
const idade = 21;

export function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}

export { nome, sobrenome as sobrenome_model1, idade as default }