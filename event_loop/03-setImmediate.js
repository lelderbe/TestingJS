console.log('A');

setImmediate(() => {
	console.log('B');
});

console.log('C');
