const rand = ( min, max ) => Math.floor( Math.random() * ( max - min + 1 ) + min );

const simbolos = `,.!@#$%"&*()[]{}_+-=?/:;<>`;
const geraMaiuscula = () => String.fromCharCode( rand( 65, 90 ) );
const geraMinuscula = () => String.fromCharCode( rand( 97, 122 ) );
const geraNumero = () => String.fromCharCode( rand( 48, 57 ) );
const geraSimbolo = () => simbolos[ rand( 0, simbolos.length - 1 ) ];

export default function geraSenha( qtd, maius, minus, num, simb ) {

    const senhaArray = [];
    qtd = Number( qtd );

    for ( let i = 1; i <= qtd; i++ ) {
        maius && senhaArray.push( geraMaiuscula() );
        minus && senhaArray.push( geraMinuscula() );
        num && senhaArray.push( geraNumero() );
        simb && senhaArray.push( geraSimbolo() );
    }
    return senhaArray.join( '' ).slice( 0, qtd );
}
