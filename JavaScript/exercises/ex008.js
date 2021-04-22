let strPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avaliaPontuacoes (strPontuacoes) {
    let pontuacoes = strPontuacoes.split(", ")
    let recordsQuebrados = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            recordsQuebrados++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return "O Recorde foi quebrado: " + recordsQuebrados + "x" + ", O Pior Jogo foi o de numero: " + piorJogo
}
 
console.log(avaliaPontuacoes(strPontuacoes))

// consultar com uFleck