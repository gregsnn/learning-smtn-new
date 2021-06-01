function falarApos(sec, phrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phrase) // aceita um unico parametro (teria que passar um objeto para mais de 1.)
        }, sec * 1000)
    })
}

falarApos(3, 'BAH!!!!!')
    .then(phrase => phrase.concat('!?!'))
    .then(otherPhrase => console.log(otherPhrase))
    .catch(e => console.log(e))