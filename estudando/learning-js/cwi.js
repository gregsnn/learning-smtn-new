/*
* Dois amigos que treinam tenis de mesa querem competir para ver quem acerta o maior numero de  saques.
* A disputa eh feita com 5 saques para cada jogador, e vence quem acertar o maior numero de saques.
* Caso ambos acertam a mesma quantidade, acontece o empate.
* A entrada esperada eh o "nome" de cada atleta e o "tempo" de treino dele em meses
  CALC:
  porcentagemAcerto = (50 + tempoTreino * 2)/100
*/

  function porcentagemAcerto(nome1, tempo1, nome2, tempo2) {
    let jogador1 = (50 + tempo1 * 2)/100;
    let jogador2 = (50 + tempo2 * 2)/100;

    let mS = 5;
    jogador1 = Math.round((jogador1 / mS * 100) / 3);
    jogador2 = Math.round((jogador2 / mS * 100) / 3);

    jogador1 = jogador1 >= mS ? mS : jogador1;
    jogador2 = jogador2 >= mS ? mS : jogador2;

    console.log(jogador1 === jogador2 ? `EMPATE` : `${nome1} ${jogador1} x ${jogador2} ${nome2}`);
  };

  porcentagemAcerto('leonardo', 123, 'gabriel', 8);