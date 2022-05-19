console.log('A');

setTimeout(() => {
	console.log('B');
}, 0);

queueMicrotask(() => {
	console.log('C');
});

Promise.resolve().then(() => console.log('D'));

console.log('E');
