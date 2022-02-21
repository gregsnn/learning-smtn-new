exports.indexPage = ( req, res ) => {
  res.render( 'index' );
}

exports.postPage = ( req, res ) => {
  res.send( ` <span> dale deli deli doly </span>` );
}