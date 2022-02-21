// funcao que retora palavra a partir de diagonal principal de matriz
function diagonalPrincipal( maturiz ) {
  let palavra = "";

  for ( const i in maturiz ) {
    palavra += maturiz[ i ][ i ];
  }
  return palavra;
}

let matriz = [
  [ "G", "R", "E", "M", "I", "O" ],
  [ "G", "R", "E", "M", "I", "O" ],
  [ "G", "R", "E", "M", "I", "O" ],
  [ "G", "R", "E", "M", "I", "O" ],
  [ "G", "R", "E", "M", "I", "O" ],
  [ "G", "R", "E", "M", "I", "O" ]
];
console.log( diagonalPrincipal( matriz ) );

// funcao que retorna soma de valores repetidos entre arrays
function somaRepetidos( arr1, arr2 ) {
  let soma = 0;

  arr1.filter( num => arr2.includes( num ) ).forEach( num => soma += num );

  return soma;
}

console.log( somaRepetidos( [ 20, 30, 4 ], [ 20, 30, 6 ] ) );


// funcao que calcula inss passando contribuicao mensal, contribuicao anual e pessoas necessarias
function calculaInss( s ) {
  let contribuicaoMensal = 0;
  let contribuicaoAnual = 0;
  let pessoasNecessarias = 0;

  let teto = Math.min( s, 6101.06 );

  if ( s <= 1045 ) {
    contribuicaoMensal = s * 0.075;
  } else if ( s <= 2089.6 ) {
    contribuicaoMensal = s * 0.09;
  } else if ( s <= 3134.4 ) {
    contribuicaoMensal = s * 0.12;
  } else {
    contribuicaoMensal = teto * 0.14;
  }

  contribuicaoAnual = contribuicaoMensal * 13.3;
  pessoasNecessarias = s / contribuicaoMensal;

  return [ contribuicaoMensal.toFixed( 2 ), contribuicaoAnual.toFixed( 2 ), pessoasNecessarias.toFixed( 2 ) ];
}

console.log( calculaInss( 12230.60 ) );


// funcao de calcular a distancia de um ponto em relacao a um array de pontos e a partir disso retorna o ponto mais proximo
function distancia( arrayPontos, pontos ) {
  let distancia = [];
  let menorDistancia = 0;
  let pontoMaisProximo = 0;

  for ( const i in arrayPontos ) {
    distancia[ i ] = Math.sqrt( Math.pow( ( arrayPontos[ i ][ 0 ] - pontos[ 0 ] ), 2 ) + Math.pow( ( arrayPontos[ i ][ 1 ] - pontos[ 1 ] ), 2 ) );
  }

  for ( let i = 0; i < distancia.length; i++ ) {
    if ( i == 0 ) {
      menorDistancia = distancia[ i ];
      pontoMaisProximo = i;
    }

    if ( distancia[ i ] < menorDistancia ) {
      menorDistancia = distancia[ i ];
      pontoMaisProximo = i;
    }
  }

  return arrayPontos[ pontoMaisProximo ];
}

console.log( distancia( [ [ 0, 0 ], [ 1, 1 ], [ 2, 2 ] ], [ 5, 5 ] ) );
console.log( distancia( [ [ 33, 27 ], [ 23, 42 ], [ 36, 49 ], [ 42, 47 ] ], [ 27, 51 ] ) );
