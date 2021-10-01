const { HTML } = require('./base');

console.log(HTML);
console.log(HTML.match(/<.+>.+<\/.+>/g)); // greedy
console.log(HTML.match(/<.+?>.+?<\/.+?>/g)); // non-greedy