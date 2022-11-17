const modB = require('./modB');
const { sayHi } = require('./modB');

modB.sayHi();
sayHi();

console.log('this moduleA:', this);
console.log('this === module.exports:', this === module.exports);
