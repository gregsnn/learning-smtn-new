exports.globalMiddleware = ( req, res, next ) => {
  // if (req.body.cliente) {
  //   req.body.cliente = req.body.cliente.replace('Miranda', '');
  //   console.log( 'vi que tu postou', req.body.cliente)
  // }
  res.locals.variable = 'Title'

  next();
}

exports.checkCsrfError = ( err, req, res, next ) => {
  if ( err && err.code == 'EBADCSRFTOKEN' ) {
    return res.render( '404' )
  }
}

exports.csrfMiddleware = ( req, res, next ) => {
  res.locals.csrfToken = req.csrfToken();

  next();
}