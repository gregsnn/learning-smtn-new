function fatorialNum(numero) {
    resultado = 1

    for(i = 1; i <= numero; i++)
        resultado *= i;

    return resultado
}

console.log(fatorialNum(4))

// (y)