const simples = function (capital, taxaJuros, tempoAplicacao) {

   return capital * (capital * taxaJuros * tempoAplicacao)
}

console.log("R$" + simples(100, 10/100, 2).toFixed(2).replace(".", ","))


// (y)