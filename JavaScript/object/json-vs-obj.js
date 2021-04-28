const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // JSON = formato textual

// console.log(JSON.parse("{ a: 1, b: 2, c:3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c':3 }"))
console.log(JSON.parse(`{ "a": 1, "b": 2, "c":3 }`))
console.log(JSON.parse(`{ "a": 1.4, "b": "string", "c": true, "d": {}, "e": []}`)) // \'string\' usado pra n fechar string quando quiser usar aspas iguais a que abrem o log