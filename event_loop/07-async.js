const fs = require('fs').promises;

async function asyncFunction() {
	console.log('A');
	await Promise.resolve();
	console.log('B');
	await fs.open(__filename);
	console.log('C');
}

// new Promise(resolve => {
// 	console.log('A');
// 	resolve(Promise.resolve());
// }).then(() => {
// 	console.log('B');
// 	return fs.open(__filename);
// }).then(() => {
// 	console.log('C');
// });

console.log('D');

asyncFunction();

console.log('E');
