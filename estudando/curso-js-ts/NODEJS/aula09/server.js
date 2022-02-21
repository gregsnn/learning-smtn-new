const express = require( 'express' );
const app = express();
const routes = require( './routes' );

const port = 3000;

// http:facebook.com/profile/123?campanha=googleads&nome_do_anuncio=anuncio_1

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen( port, 'localhost', () => {
  console.log( `Acessar http://localhost:${ port }` );
  console.log( `servidor executando na porta ${ port }` )
} );