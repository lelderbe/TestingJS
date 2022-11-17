function sum() {
	return Object.values(arguments).reduce((acc, item) => acc + item, 0);
}

function sum2(...args) {
	return args.reduce((acc, item) => acc + item, 0);
}

console.log(sum());
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum2(1, 2, 3, 4, 5, 6));
