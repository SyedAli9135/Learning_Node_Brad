// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname))

console.log(__dirname, __filename);

class person  {
    constructor(name,age) {
        this.name = 'John Doe',
        this.age = 30
    }

    greeting() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
   
}
module.exports = person;