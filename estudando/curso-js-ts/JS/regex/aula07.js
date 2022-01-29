const { HTML2 } = require('./base');

// $1 = grupo 1 <- retrovisor (variavel)

// [\s\S] -> gambiarra para multiplas linhas (dot all)
// ?: -> cancela o salvamento de group

// $1 = \w = p (tag)
// $2 = hello world

// console.log(HTML2);
// console.log(HTML2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g));
console.log(HTML2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1 "HAHA$3HAHA" $4'));