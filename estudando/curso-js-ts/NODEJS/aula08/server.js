const express = require( 'express' );
const app = express();

const port = 3000;

// http:facebook.com/profile/123?campanha=googleads&nome_do_anuncio=anuncio_1

app.use(express.urlencoded({ extended: true }));

app.get( '/', ( req, res ) => {
  res.send( `
  <form action="/" method="post">
    Client Name: <input type="text" name="nome" placeholder="nome" />
    <Button type="submit" >Enviar</Button>
  </form>
  `);
} );

app.get('/tests/:idUsuario?/:param?', (req, res) => {
  // /profile/3
  // /profile/?chave=valor1&chave2=valor2&...
  // 
  console.log(req.params)
  console.log(req.query)
  res.send(req.params)
}) 

app.post( '/', ( req, res ) => {
  console.log(req.body);
  res.send( ` <span> ${req.body.nome} </span>` );
} );

app.listen( port, 'localhost', () => {
  console.log( `Acessar http://localhost:${ port }` );
  console.log( `servidor executando na porta ${ port }` )
} );