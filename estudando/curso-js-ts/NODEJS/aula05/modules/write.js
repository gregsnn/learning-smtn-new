const fs = require( 'fs' ).promises;

// encoding: 'utf-8'/*nao necessario passar encoding*/ 
module.exports = ( path, data ) => {
  fs.writeFile( path, data, { flag: 'w' } )
}