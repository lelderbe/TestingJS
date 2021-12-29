let counter = 1000;

function ex01() {
	console.log(this);

	console.log('\n------------ Замыкание - Closure ---------------');
	let counter = 100;
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

}

// ex01();

function ex02() {
	console.log('\n------------ Замыкание в конструкторе ---------------');
	function Counter() {
		let count = 0;

		this.up = function() {
			return ++count;
		};

		this.down = function() {
			return --count;
		};
	}

	let counter = new Counter();
	let counter2 = new Counter();

	console.log('up:', counter.up()); // 1
	console.log('up:', counter.up()); // 2
	console.log('down:', counter.down()); // 1
	console.log('up2:', counter2.up()); // 1
}

// ex02();

function ex03() {
	console.log('\n------------ Сумма с помощью замыканий ---------------');
	{
		function sum(a) {
			return function (b) {
				return a + b;
			}
		}

		console.log(sum(1)(2)); //= 3
		console.log(sum(5)(-1)); //= 4
		console.log(sum(5)(sum(-4)(-2))); //= 0
	}
}

ex03();
