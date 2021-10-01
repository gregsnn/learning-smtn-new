function triangulo(num) {
  for (let i = 1; i <= num; i++) {
    let zero = '0'.repeat(num - i);
    let um = '1'.repeat(i * 2 - 1);

    console.log(zero + um + zero);
  }
}

triangulo(3);