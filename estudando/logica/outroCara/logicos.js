const expAnd = true && true && false;
const expOr = true || false || false;

console.log(expAnd);  // && (need all true)
console.log(expOr);   // || (need only one true)
console.log(!expAnd); // !  (negacao da afirmacao) / usado 2 vezes "!!" para realcar afirmacao