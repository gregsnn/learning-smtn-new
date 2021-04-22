const composto = function(capital, taxa, tempo) {

    return capital * (1 + taxa) ** tempo
}

console.log("R$" + composto(100, 10/100, 2).toFixed(2).replace(".", ","))

// esperando revisão