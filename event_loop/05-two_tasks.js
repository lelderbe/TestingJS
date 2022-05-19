console.log('1');

setTimeout(() => {
	console.log('A');
	Promise.resolve().then(() => console.log('B'));
}, 0);

console.log('2');

setTimeout(() => {
	console.log('C');
	queueMicrotask(() => console.log('D'));
}, 0);

console.log('3');
