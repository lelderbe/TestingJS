const sayHi = () => console.log('Hi!');

// exports.sayHi = sayHi;
module.exports.sayHi = sayHi;

console.log('this moduleB:', this);
