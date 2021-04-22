function anuidade(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return "R$" + (valor * ((1 + ( 3 / 100 )) ** atraso)).toFixed(2).replace(".", ",")
    } else {
        return 'Mês inválido.'
    }
}

console.log(anuidade(4, 100))

// consultar com uFleck