// @ts-nocheck
const express = require( 'express' );
const route = express.Router();
const homeController = require( './src/controllers/home-controller' );
const contactController = require( './src/controllers/contact-controller' );

function myMiddleware( req, res, next ) {
  req.session = {
    nome: 'Fulano',
    sobrenome: 'de Tal',
    idade: 20
  };

  console.log( 'Middleware 1' );
  next();
}

// rotas home
route.get( '/', homeController.indexPage);
route.post('/', homeController.postPage );

// rotas contact
route.get( '/contact', contactController.indexPage );

module.exports = route