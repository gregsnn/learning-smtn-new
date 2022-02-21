const path = require( 'path' );
const filePath = path.resolve( __dirname, 'test.json' );
const write = require( './modules/write' );
const read = require( './modules/read' );

// const pessoas = [
//   { nome: 'João', idade: 20 },
//   { nome: 'Maria', idade: 25 },
//   { nome: 'José', idade: 30 },
//   { nome: 'Pedro', idade: 35 },
//   { nome: 'Ana', idade: 40 },
//   { nome: 'Beatriz', idade: 45 },
//   { nome: 'Carlos', idade: 50 },
//   { nome: 'Daniel', idade: 55 },
//   { nome: 'Eduardo', idade: 60 },
//   { nome: 'Fabio', idade: 65 },
//   { nome: 'Gilberto', idade: 70 },
//   { nome: 'Heitor', idade: 75 },
//   { nome: 'Isabela', idade: 80 },
//   { nome: 'Joaquim', idade: 85 },
// ]
// const json = JSON.stringify( pessoas, null, 2 );

// write( filePath, json );

async function readFile( filePath ) {
  const data = await read( filePath );
  dataRender( data );
}

function dataRender( data ) {
  data = JSON.parse( data );

  for (const ppl of data) {
    console.log( `${ppl.nome} tem ${ppl.idade} anos` );
  }
}

readFile( filePath );