// closure é o escopo criado NO MOMENTO EM QUE A FUNÇÃO É CRIADA
// esse escopo permite a função acessar e manipular variáveis externas à função

// contexto léxico
const x = `Global`

function outside() {
    const x = `Local`
    function inside() {
        return x
    }
    return inside
}

const minhaFunction = outside()
console.log(minhaFunction())