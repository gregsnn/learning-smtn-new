// funciona com -> String, Obj, Num, Functions
// const nome2 = new Array('Edu', 'Maria', 'Joana');

// valor por referencia
const nome = ['Edu', 'Maria', 'Joana'];
// const novo = nome; // alteracoes refletem
const novo = [...nome]; // alteracoes nao refletem

// valores removidos de array podem ser salvos em variaveis -> shift() - pop()