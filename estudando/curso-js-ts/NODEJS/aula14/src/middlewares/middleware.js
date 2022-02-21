module.exports = (req, res, next) => {

  if (req.body.cliente) {
    req.body.cliente = req.body.cliente.replace('Miranda', '');
    console.log( 'vi que tu postou', req.body.cliente)
  }

  next();
}