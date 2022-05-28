const utils = require('util');

console.log('__dirname:', __dirname);
console.log('__filename:', __filename);
// console.log(process);

console.log('This is %s world with %d nodes', 'red', 16);

const text = utils.format('%d. Use only for %s purposses', 1.1, 'debugging');
console.log(text);

console.time('test');

const obj = { name: "Joe Doe", age: 15 };
console.log(obj);
console.log('%j', obj);
console.dir(obj);
console.log(utils.inspect(obj));

console.timeEnd('test');
