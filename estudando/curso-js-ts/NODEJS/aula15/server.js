// @ts-nocheck
require( 'dotenv' ).config();
const express = require( 'express' );
const app = express();

const mongoose = require( 'mongoose' );
mongoose.connect( process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true } )
  .then( () => {
    app.emit( 'ready' );
  } ).catch( ( err ) => {
    console.error( 'err:', err )
  } );

const session = require( 'express-session' );
const MongoStore = require( 'connect-mongo' );
console.log( MongoStore );

const flash = require( 'connect-flash' );

const routes = require( './routes' );
const path = require( 'path' );
const middleware = require( './src/middlewares/middleware' );
const { ContextExclusionPlugin } = require( 'webpack' );

const port = 3000;

const convertToDays = ( days ) => {
  return 1000 * 60 * 60 * 24 * days;
};
// http:facebook.com/profile/123?campanha=googleads&nome_do_anuncio=anuncio_1

app.use( express.urlencoded( { extended: true } ) );

app.use( express.static( path.resolve( __dirname, 'public' ) ) );

app.use( session
  ( {
    store: MongoStore.create( { mongoUrl: process.env.URI, mongooseConnection: mongoose.connection } ),
    secret: 'birimbau',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: convertToDays( 7 ),
      httpOnly: true
    },
  } ) );
app.use( flash() );

app.set( 'views', path.resolve( __dirname, 'src', 'views' ) );
app.set( 'view engine', 'ejs' );

app.use( middleware );
app.use( routes );

app.on( 'ready', () => {
  app.listen( port, 'localhost', () => {
    console.log( `Acessar http://localhost:${ port }` );
    console.log( `servidor executando na porta ${ port }` );
  } );
} );