function getCounter() {
	let counter = 0;
	return function () {
		return counter++;
	}
}

const counter1 = getCounter();
const counter2 = getCounter();
console.log('counter1:', counter1());
console.log('counter1:', counter1());
console.log('counter2:', counter2());
