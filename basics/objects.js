// 'use strict';

function ex01() {
	console.log('\n-------------- create object ---------------');
	// obj = new Object();
	// obj.value = 42;
	obj = {
		value: 42
	};
	obj.next = null;
	console.log('obj:', obj);

	obj.toString = function() {
		return this.value;
	}

	console.log('obj.toString:', obj.toString);
	console.log('obj.toString():', obj.toString());

	book = {
		title: 'JavaScript',
		edition: 7
	};
	console.log('book:', book);
	console.log('book.title:', book.title);
	console.log("book['edition']:", book['edition']);
	book.contents = {}
	console.log('book.contents:', book.contents);
	console.log('book.contents.ch1:', book.contents.ch1);
	console.log('book.contents.ch1?.sect1 :', book.contents.ch1?.sect1);

	console.log('\n-------------- for (let key in book) ---------------');
	for (let key in book) {
		console.log(key, ':', book[key])
	}

	console.log("book.hasOwnProperty('title'):", book.hasOwnProperty('title'));
	console.log("'title' in book:", 'title' in book);

	// object's values is not iterable
	// for (let value of book) {
	// 	console.log(value)
	// }

	console.log('\n-------------- Object.entries() ---------------');
	book.contents = {
		ch1: 100,
		ch2: 15,
	}
	for (const [key, value] of Object.entries(book)) {
		console.log('key:', key, ", value:", value);
	}

	console.log('\n-------------- деструктурирующее присванивание ---------------');
	let color = {
		r: 0.0,
		g: 0.5,
		b: 0.9,
		a: 1.0,
	}

	const {r, g, b} = color;
	console.log('r:', r, 'g:', g, 'b:', b);

	console.log('\n-------------- условный доступ к свойствам ---------------');
	console.log('color.g:', color.g);
	console.log('color.f:', color.f);
	color = null;
	console.log('color?.f?.g:', color?.f?.g);
}

// ex01();

function ex02() {
	console.log('\n-------------- create object ---------------');
	let prop = 'city';
	const user = {
		name: 'John',
		age: 15,
		[prop]: 'NY',
	};
	console.log('user:', user);

	console.log('\n-------------- add property ---------------');
	user.sex = 'MALE';				// new
	user['likes birds'] = true;		// multi-word
	prop = 'job';
	user[prop] = 'IT';				// use variable value
	console.log('user:', user);

	console.log('\n-------------- delete property ---------------');
	delete user[prop];
	delete user['likes birds'];
	console.log('user:', user);

	console.log('\n-------------- short property ---------------');
	function f1(name, age) {
		return {
			name,	// the same as name: name
			age,	// the same as age: age
			color: 'yellow',
		}
	}
	console.log(f1('Joe', 17));

	console.log('\n-------------- check "key" in ---------------');
	console.log('"name" in user:', 'name' in user);
	console.log('"lalala" in user:', 'lalala' in user);
	console.log('user.name === undefined:', user.name === undefined);
	console.log('user["lalala"] === undefined:', user['lalala'] === undefined);

	console.log('\n-------------- for (let key in ...) ---------------');
	console.log('user:', user);
	for (let key in user) {		// or "for (let prop in obj)"
		console.log(key, ':', user[key]);
	}

	console.log('\n-------------- wrong usage ---------------');
	const x = 'hello';
	x.test = 'test';		// no error
	console.log('x.test:', x.test);
	console.log('x:', x);
}

// ex02();

function ex03() {
	console.log('\n-------------- check obj is empty? ---------------');
	function isEmpty(obj) {
		for (let key in obj) {
			return false;
		}
		return true;
	}

	let schedule = {};
	console.log(isEmpty(schedule)); // true
	schedule['8:30'] = 'get up';
	console.log(isEmpty(schedule)); // false
}

// ex03();

function ex04() {
	console.log('\n-------------- Сумма свойств объекта ---------------');
	let salaries = {
		John: 100,
		Ann: 160,
		Pete: 130
	};

	let sum = 0;
	for (let key in salaries) {
		sum += salaries[key];
	}
	console.log('sum:', sum);
}

// ex04();

function ex05() {
	console.log('\n------- Умножаем все числовые свойства на 2 --------');
	function multiplyNumeric(obj) {
		for (let key in obj) {
			if (typeof obj[key] === 'number') {
				obj[key] *= 2;
			}
		}
	}

	// до вызова функции
	let menu = {
		width: 200,
		height: 300,
		title: "My menu"
	};

	console.log('before:', menu);
	multiplyNumeric(menu);
	console.log(' after:', menu);
}

// ex05();

function ex06() {
	console.log('\n---------------- Объекты по ссылке -----------------');
	const obj1 = {
		name: 'AAA',
	}
	const obj2 = obj1;
	console.log('obj1:', obj1, ', obj2:', obj2);
	obj1.name = 'ZZZ';
	console.log('obj1:', obj1, ', obj2:', obj2);

	console.log('\n-------------- Примитивы по значению ---------------');
	let str1 = 'AAA';
	let str2 = str1;
	console.log('str1:', str1, ', str2:', str2);
	str1 = 'ZZZ';
	console.log('str1:', str1, ', str2:', str2);

	console.log('\n---------------- Сравнение объектов -----------------');
	{
		let o1 = {};
		let o2 = {};
		console.log('o1 == o2:', o1 == o2);
		console.log('o1 === o2:', o1 === o2);

		console.log('o2 = o1;');
		o2 = o1;
		console.log('o1 == o2:', o1 == o2);
		console.log('o1 === o2:', o1 === o2);
	}

	console.log('\n---------------- Object.assign() -----------------');
	let o1 = { a: 1 };
	let o2 = { b: 2 };
	let o3 = { c: 4, d: { z: 7 } };
	console.log('o1:', o1, ', o2:', o2, ', o3:', o3);
	console.log('Object.assign(o1, o2, o3);'); Object.assign(o1, o2, o3);
	console.log('o1:', o1, ', o2:', o2, ', o3:', o3);
	console.log('\n---------------- clone Object -----------------');
	let clone = Object.assign({}, o1);
	console.log('   o1:', o1);
	console.log('clone:', clone);

}

// ex06();

function ex07() {
	console.log('\n---------------- Methods -----------------');
	console.log('\n---------------- Declaration v1 -----------------');
	{
		const user = {
			name: 'Incognito',
			hi: function() {
				console.log('Hi, I\'m', this.name);
			}
		}

		user.name = 'John';
		user.hi();
	}

	console.log('\n---------------- Declaration v2 -----------------');
	{
		const user = {
			name: 'Incognito',
			hi() {
				console.log('hello, I\'m', this.name);
			}
		}

		user.name = 'Alice';
		user.hi();
	}

	console.log('\n---------------- this depends on object -----------------');
	{
		const user = { name: 'Bob' };
		const admin = { name: 'Bill' };

		function hi() {
			'use strict';
			console.log(this?.name);
		}

		user.hi = hi;
		admin.hi = hi;

		user.hi();
		admin.hi();
		hi();
	}

	console.log('\n---------------- this and arrow functions -----------------');
	{
		const user = {
			name: 'Joe',
			hi() {
				let arrow = () => {
					console.log(this.name);
				};
				arrow();
			},
			f: () => {
				console.log(this.name);
			}
		}

		user.hi();
		user.f();
	}

	console.log('\n---------------- calculator -----------------');
	{
		const calculator = {
			read(a, b) {
				this.a = a;
				this.b = b;
			},

			sum() {
				return this.a + this.b;
			},

			mul() {
				return this.a * this.b;
			}
		}

		calculator.read(1, 2);
		console.log(calculator.sum());
		console.log(calculator.mul());
	}

	console.log('\n---------------- ladder -----------------');
	{
		const ladder = {
			step: 0,
			up() {
				this.step++;
				return this;
			},
			down() {
				this.step--;
				return this;
			},
			showStep: function() {	// показывает текущую ступеньку
				console.log(this.step);
			}
		};

		ladder.up();
		ladder.up();
		ladder.down();
		ladder.showStep(); // 1

		ladder.up().up().down().showStep(); // 1
	}
}

// ex07();

function ex08() {
	console.log('\n---------------- Constructors -----------------');
	{
		function User(name) {
			// this = {}; (неявно)

			// изменение объекта
			this.name = name;
			this.isAdmin = false;

			this.hi = function() {
				console.log('hi, I\'m', this.name);
			};

			// return this; (неявно)
		}

		const user = new User('Bob');
		const admin = new User('Bill');

		console.log(user);
		console.log(admin);
		user.hi();
		admin.hi();
	}

	console.log('\n---------------- Constructors - return -----------------');
	{
		const obj = {};

		function A() { return obj; }
		function B() { return obj; }

		let a = new A();
		let b = new B();

		console.log(a == b); // true
	}

	console.log('\n---------------- Calculator -----------------');
	{
		function Calculator() {
			this.read = function (a, b) {
				this.a = a;
				this.b = b;
			};

			this.sum = function () {
				return this.a + this.b;
			};

			this.mul = function () {
				return this.a * this.b;
			};
		}

		let calculator = new Calculator();
		calculator.read(1, 2);
		console.log(calculator.sum());
		console.log(calculator.mul());
	}

	console.log('\n---------------- Accumulator -----------------');
	{
		function Accumulator(startingValue) {
			this.value = startingValue;

			this.read = function (value) {
				this.value += value;
			};
		}

		let accumulator = new Accumulator(1); // начальное значение 1
		console.log(accumulator.value); // выведет сумму этих значений
		accumulator.read(2); // прибавит ввод prompt к текущему значению
		console.log(accumulator.value); // выведет сумму этих значений
		accumulator.read(3); // прибавит ввод prompt к текущему значению
		console.log(accumulator.value); // выведет сумму этих значений
	}
}

// ex08();

function ex09() {
	console.log('\n---------------- ?. ?.() ?.[] -----------------');
	let user1 = {
		prop: {
			subprop: 15
		},
		admin() {
			return 'admin';
		}
	};
	let user2 = {
	};

	console.log('user1.admin?.():', user1.admin?.());
	console.log('user2.admin?.():', user2.admin?.());

	console.log('user1.prop.subprop:', user1.prop.subprop);
	console.log('user2.prop?.subprop:', user2.prop?.subprop);

	console.log("user1.prop['subprop']:", user1.prop['subprop']);
	console.log("user2['prop']?.['subprop']:", user2['prop']?.['subprop']);

	delete user1?.prop;
}

// ex09();

function ex10() {
	console.log('\n------------ Symbol.toPrimitive -------------');
	{
		const obj = {
			value: 5,
			[Symbol.toPrimitive](hint) {
				// должен вернуть примитивное значение
				// hint равно чему-то одному из: "string", "number" или "default"
				console.log('hint:', hint);
				return (hint == 'string') ? `value is: ${this.value}` : this.value;
			}
		}

		console.log('obj:', obj);
		console.log();
		console.log('+obj:', +obj);
		console.log();
		console.log("'' + obj:", '' + obj);
		console.log();
		console.log('String(obj):', String(obj));
	}

	console.log('\n---------- OLD: toString(), valueOf() -----------');
	{
		const obj = {
			value: 5,

			// для хинта равного "string"
			toString() {
				return 'value is: ' + this.value;
			},

			// для хинта равного "number" или "default"
			valueOf() {
				return this.value;
			}
		}

		console.log('obj:', obj);
		console.log();
		console.log('+obj:', +obj);
		console.log();
		console.log('"" + obj:', '' + obj);
		console.log();
		console.log('String(obj):', String(obj));
	}
}

// ex10();

function ex11() {
	console.log('\n---------- Object.keys(), values(), entries() -----------');
	{
		let o = {
			name: 'John',
			age: 20,
		}

		console.log('object:', o);
		console.log('.keys():', Object.keys(o));
		console.log('.values():', Object.values(o));
		console.log('.entries():', Object.entries(o));
	}

	console.log('\n---------- Task: Сумма свойств объекта -----------');
	{
		function sumSalaries(salaries) {
			let result = 0;
			for (let value of Object.values(salaries)) {
				result += value;
			}
			return result;
		}

		function sumSalaries2(salaries) {
			return Object.values(salaries).reduce((acc, value) => acc + value, 0);
		}

		const salaries = {
			"John": 100,
			"Pete": 300,
			"Mary": 250
		};
		console.log(sumSalaries(salaries)); // 650
		console.log(sumSalaries2(salaries)); // 650
	}

	console.log('\n---------- Task: Подсчёт количества свойств объекта -----------');
	{
		function count(obj) {
			return Object.keys(obj).length;
		}

		const user = {
			name: 'John',
			age: 30
		};
		console.log(count(user)); // 2
	}
}

// ex11();

function ex12() {
	console.log('\n---------- Task: Деструктурирующее присваивание -----------');
	{
		const user = { name: "John", years: 30 };

		const { name, years : age, isAdmin = false } = user;

		console.log(name); // John
		console.log(age); // 30
		console.log(isAdmin); // false
	}

	console.log('\n---------- Task: Максимальная зарплата -----------');
	{
		function topSalary(salaries) {
			let maxName = null;
			let maxSalary = 0;

			for (const [name, salary] of Object.entries(salaries)) {
				if (salary > maxSalary) {
					maxSalary = salary;
					maxName = name;
				}
			}
			return maxName;
		}

		const salaries = {
			"John": 100,
			"Pete": 300,
			"Mary": 250
		};

		console.log(topSalary(salaries));
	}
}

ex12();
