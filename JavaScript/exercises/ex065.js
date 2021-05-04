/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro. */

function buscarPalavras(str, array) {
    const results = []

    for(let palavra of array) {
        if(palavra.includes(str)) {
            results.push(palavra)
        }
    }
        
    return results
}
console.log(buscarPalavras('pro', ["programação", "mobile", "profissional"]))