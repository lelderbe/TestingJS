const fs = require('fs');

console.log('A');

new Promise((resolve, reject) => {
	console.log('B');
	resolve();
}).then(() => console.log('C'))
	.then(() => console.log('D'));

setTimeout(_ => console.log('E'), 0);

fs.open(__filename, _ => {
	console.log('F');
	queueMicrotask(_ => {
		console.log('G');
		queueMicrotask(_ => {
			console.log('H');
		})
	})
})

process.nextTick(_ => {
	console.log('I');
	process.nextTick(_ => console.log('J'));
})

console.log('K');
