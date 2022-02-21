exports.indexPage = ( req, res ) => {
  // req.session.user = { name: 'Greg', loggedIn: true }
  // req.flash('info', 'Hello World!')
  // req.flash('error', 'ERR!')
  // req.flash('success', 'SUS!')
  console.log(req.flash('error'), req.flash('success'), req.flash('info'))
  console.log( req.session.user )
  res.render( 'index' );
  return
}

exports.postPage = ( req, res ) => {
  res.send( req.body );
}