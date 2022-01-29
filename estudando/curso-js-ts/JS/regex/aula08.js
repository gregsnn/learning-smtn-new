const { LOOKAHEAD } = require('./base');

// positive LookAhead
// negative LookAhead
// positive LookBehind
// negative LookBehind

// console.log(LOOKAHEAD.match(/.+\bactive$\b/gim));


// positive lookahead (tem active)
// console.log(LOOKAHEAD.match(/\S+.+(?=\s+\bactive\b)/gim));
// positive lookahead (tem inactive)
// console.log(LOOKAHEAD.match(/\S+.+(?=\s+\binactive\b)/gim));

// negative lookahead (nao tem active)
// console.log(LOOKAHEAD.match(/^(?!.+\bactive\b).+$/gim));
// negative lookahead (nao tem inactive)
// console.log(LOOKAHEAD.match(/^(?!.+\binactive\b).+$/gim));


// positive lookabehind (tem online)
// console.log(LOOKAHEAD.match(/(?<=ONLINE\s+)\S+.+/gim));

// negative lookabehind (nao tem online)
// console.log(LOOKAHEAD.match(/^.+(?<!ONLINE.+)$/gim));

const cpf = `
012.250.796-10
111.111.111-19
999.999.999-99
046.120.356-54
122.650.546-76
aaa.bbb.ccc-dd
`

console.log(cpf.match( /^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)(\d{3}\.?){3}-\d{2}$/gm));