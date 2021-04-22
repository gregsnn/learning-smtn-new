/* const prod1 = {
 *      nome: `Galileu`, preço: 45
 * }
 *
 * const prod2 = {
 *      nome: `Galileia`, preço: 85
 * }   
 */

// factory simples - função que retorna/fabrica objetos (sempre que retornar ele provê um novo objeto)
function criarPessoa() {
    return {
        nome: `Ana`, sobrenome: `Beatriz`
    }
}

console.log(criarPessoa())