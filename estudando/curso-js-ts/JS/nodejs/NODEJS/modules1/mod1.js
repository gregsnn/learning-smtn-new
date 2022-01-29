// const nome = 'Gregori';
// const sobrenome = 'Nunes';

// const sayMyName = (nome, sobrenome) => `${nome} ${sobrenome}`;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = sayMyName;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = sayMyName;
// this.qlqrCoisa = `qlqr coisa mesmo`; => referencia exports

class Pessoa {
    constructor ( nome, sobrenome ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
};

module.exports = {
    Pessoa
};