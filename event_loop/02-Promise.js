console.log('A');

new Promise((resolve, reject) => {
	console.log('B');
	resolve();
}).then(() => {
	console.log('C');
});

console.log('D');
