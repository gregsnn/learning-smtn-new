/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function caracteres(carac1, carac2) {
    carac1 = "aBc".toLowerCase()
    carac2 = "Abc".toLowerCase()

    return carac1 === carac2 ? "True" : "False"
}

console.log(caracteres())

// (y)