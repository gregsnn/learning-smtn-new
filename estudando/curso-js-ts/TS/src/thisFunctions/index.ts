export function funcao(this: Date, argument1: string, age?: number): void {
  // `this: Date` n eh argumento
  console.log(this);
  console.log(argument1, age);
}

funcao.call(new Date(), 'Lennon', 30); // 1- oq eh o this
funcao.apply(new Date(), ['Lennon', 30]);
