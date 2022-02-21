// @ts-nocheck
require( 'dotenv' ).config();
const express = require( 'express' );
const helmet = require( 'helmet' );
const csrf = require( 'csurf' );

const app = express();
const flash = require( 'connect-flash' );
const mongoose = require( 'mongoose' );
mongoose.connect( process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true } )
  .then( () => {
    app.emit( 'ready' );
  } ).catch( ( err ) => {
    console.error( 'err:', err )
  } );
const session = require( 'express-session' );
const MongoStore = require( 'connect-mongo' );

const routes = require( './route' );
const path = require( 'path' );
const { globalMiddleware, checkCsrfError, csrfMiddleware } = require( './src/middleware/middleware' );
const { ContextExclusionPlugin } = require( 'webpack' );

const port = 3000;

const convertToDays = ( days ) => {
  return 1000 * 60 * 60 * 24 * days;
};

app.use( helmet() );
app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );
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

app.set( 'views', path.resolve( __dirname, 'src', 'view' ) );
app.set( 'view engine', 'ejs' );

app.use( csrf() )
app.use( csrfMiddleware );
app.use( checkCsrfError );
app.use( globalMiddleware );
app.use( routes );

app.on( 'ready', () => {
  app.listen( port, 'localhost', () => {
    console.log( `Acessar http://localhost:${ port }` );
    console.log( `servidor executando na porta ${ port }` );
  } );
} );