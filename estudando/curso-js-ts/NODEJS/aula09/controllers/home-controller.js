exports.indexPage = ( req, res ) => {
  res.send( `
  <form action="/" method="post">
    Client Name: <input type="text" name="nome" placeholder="nome" />
    <Button type="submit" >Enviar</Button>
  </form>
  `);
}

exports.postPage = ( req, res ) => {
  res.send( ` <span> dale deli deli doly </span>` );
}