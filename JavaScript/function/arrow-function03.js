let compareThis = function(parametro) {
    console.log(this === parametro)
}

compareThis(global) // "o this não é o this".

const obj = {}
compareThis = compareThis.bind(obj)
compareThis(global)
compareThis(obj)

let compareThisArrow = parametro => console.log(this === parametro)
compareThisArrow(global)
compareThisArrow(module.exports)

compareThisArrow = compareThisArrow.bind(obj)
compareThisArrow(obj)
compareThisArrow(module.exports)