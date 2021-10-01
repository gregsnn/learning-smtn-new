const pontosUsuarios = 999;
const userLevel = (pontosUsuarios >= 1000) ? 'VIP user' : 'STANDARD user';

const bgUser = 'Blue Jeans, Light shirt';
const defaultBg = bgUser || 'Black'; // fallback (valor padrao)

console.log(userLevel);
console.log(defaultBg);

// em ternarios = recorrer a uma segunda variavel para armazenar valor, nao usar a mesma sobrepondo o valor inicial.