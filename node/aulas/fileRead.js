const fs = require('fs')
const { fileURLToPath } = require('url')

const caminho = __dirname + '/file.json'

// sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// ...assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./file.json')
console.log(config.db)

fs.readdir(__dirname, (err, files) => {
    console.log('arquivos da pasta...')
    console.log(files)
})