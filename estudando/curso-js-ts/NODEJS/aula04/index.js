const fs = require( 'fs' ).promises;
const path = require( 'path' );

async function readDir( rootDir ) {
  rootDir = rootDir || path.resolve( __dirname )

  const files = await fs.readdir( rootDir );

  walk( files, rootDir )
}

async function walk( files, rootDir ) {
  for ( const file of files ) {
    const fullPath = path.resolve( rootDir, file )
    const stats = await fs.stat( fullPath );

    if ( /\.git/g.test( fullPath ) || /node_modules/g.test( fullPath ) ) continue

    if ( stats.isDirectory() ) {
      readDir( fullPath )
      continue
    }

    if ( !/\.html/g.test( fullPath ) ) continue

    console.log( fullPath );
  }
}

readDir( '/home/gregsnn/Documents/Estudando/JS-TS/' );