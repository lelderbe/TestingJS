function ex01() {
	console.log('\n------------ function properties ---------------');
	console.log(ex01.name, ex01.length);

	console.log('\n------------ custom properties ---------------');
	function makeCounter() {
		let count = 0;

		function counter() {
			return count++;
		}

		// counter.set = function (value) {
		// 	count = value;
		// };
		counter.set = (value) => count = value;

		// counter.decrease = function () {
		// 	count--;
		// };
		counter.decrease = () => count--;

		return counter;
	}

	let counter = makeCounter();

	console.log(counter()); // 0
	console.log(counter()); // 1
	counter.set(10); // установить новое значение счётчика
	console.log(counter()); // 10
	counter.decrease(); // уменьшить значение счётчика на 1
	console.log(counter()); // 10 (вместо 11)
}

ex01();
