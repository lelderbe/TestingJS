let counter = 1000;

function ex01() {
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

// ex03();

function ex04() {
	console.log('\n------------ Фильтрация с помощью функции ---------------');
	{
		function inBetween(from, to) {
			return function (item, index, arr) {
				// console.log('index:', index);
				// console.log('arr:', arr);
				return item >= from && item <= to;
			}
		};

		function inArray(arr) {
			return function (item) {
				return arr.includes(item);
			}
		}

		let arr = [1, 2, 3, 4, 5, 6, 7];
		console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
		console.log(arr.filter(inBetween(1, 3))); // 1,2,3
		console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
	}
}

// ex04();

function ex05() {
	console.log('\n------------ Сортировать по полю ---------------');
	{
		function byField(name) {
			// return function (a, b) {
			// 	return a[name] > b[name] ? 1 : -1;
			// }
			return (a, b) => a[name] > b[name] ? 1 : -1;
		}

		let users = [
			{ name: "John", age: 20, surname: "Johnson" },
			{ name: "Pete", age: 18, surname: "Peterson" },
			{ name: "Ann", age: 19, surname: "Hathaway" },
			{ name: "Ann", age: 22, surname: "Hathaway2" },
		];

		console.log('John' - 'Ann');

		console.log(users);
		users.sort(byField('name'));
		console.log(users);
		users.sort(byField('age'));
		console.log(users);
	}
}

// ex05();

function ex06() {
	console.log('\n------------ Сумма с произвольным количеством скобок ---------------');
	{
		function sum(a) {
			let value = a;
			function f(b) {
				value += b;
				return f;
			}

			f.toString = function() {
				return value;
			};

			return f;
		}

		console.log(+sum(1)); // 1
		console.log(+sum(1)(2)); //= 3
		console.log(+sum(5)(-1)); //= 4
		console.log(+sum(5)(3)(2)); //= 10
	}
}

ex06();
