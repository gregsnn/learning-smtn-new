// @ts-nocheck
const express = require( 'express' );
const route = express.Router();
const homeController = require( './src/controller/home-controller' );
const contactController = require( './src/controller/contact-controller' );

// rotas home
route.get( '/', homeController.indexPage);
route.post('/', homeController.postPage );

// rotas contact
route.get( '/contact', contactController.indexPage );

module.exports = route