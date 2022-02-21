const express = require( 'express' );
const app = express();

// CRUD -> Create, Read, Update, Delete
//         POST,    GET, PUT,    DELETE
// http://meusite.com/ <- GET -> entregue a página principal
// http://meusite.com/sobre <- GET -> entregue a página sobre
const port = 3000;

app.get( '/', ( req, res ) => {
  res.send( `
  <form action="/" method="post">
    Client Name: <input type="text" name="nome" placeholder="nome" />
    <Button type="submit" >Enviar</Button>
  </form>
  `);
} );

app.post( '/', ( req, res ) => {
  res.send( ` <span> Recebi o form </span>` );
} );

app.get( '/contact', ( req, res ) => {
  res.send( '<h1> Obrigado por entrar em contato conosco </h1>' );
} );

app.listen( port, 'localhost', () => {
  console.log( `Acessar http://localhost:${ port }` );
  console.log( `servidor executando na porta ${ port }` )
} );