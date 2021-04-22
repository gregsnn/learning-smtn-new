class pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`meu nome é ${this.nome}.`)
    }
}

const p1 = new pessoa(`joao`)
p1.falar()

const novaPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = novaPessoa(`Carlos`)
p2.falar()