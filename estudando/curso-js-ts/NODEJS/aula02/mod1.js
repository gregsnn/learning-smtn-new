// module.exports = function(x, y, op) {
//   return eval(`${x} ${op} ${y}`);
// }

module.exports = class Dog {
  constructor(name) {
    this.name = name;
  };
  bark() {
    console.log(`${this.name} is barking`);
  };
};