exports.indexPage = ( req, res ) => {
  res.render( 'index' );
  return
}

exports.postPage = ( req, res ) => {
  res.send( req.body );
}