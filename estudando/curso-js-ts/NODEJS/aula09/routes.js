const express = require( 'express' );
const route = express.Router();
const homeController = require( './controllers/home-controller' );
const contactController = require( './controllers/contact-controller' );

// rotas home
route.get( '/', homeController.indexPage );
route.post('/', homeController.postPage );

// rotas contact
route.get( '/contact', contactController.indexPage );

module.exports = route