const anon = process.argv.indexOf('-a') !== -1
// console.log(anon)

if(anon) {
    process.stdout.write('fala anon!\n')
    process.exit()
} else {
    process.stdout.write('informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`fala ${nome}!!\n`)
        process.exit()
    })
}