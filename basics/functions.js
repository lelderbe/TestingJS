function ex01() {
	console.log('\n------------ simple functions ---------------');
	function plus1(x) {
		return x + 1;
	}

	function square(x) {
		return x * x;
	}

	const y = 3;
	console.log(plus1(y));
	console.log(square(plus1(y)));
}

// ex01();

function ex02() {
	console.log('\n------------ arrow functions ---------------');
	const plus1 = x => x + 1;
	const square = x => x * x;

	const y = 3;
	console.log(plus1(y));
	console.log(square(plus1(y)));
}

// ex02();

function ex03() {
	console.log('\n------------ передача функции в параметре ---------------');
	function func1(n) {
		console.log('func1:', n);
	}

	function func2(n, log) {
		if (log)
			log(n);
		return n * n;
	}

	function func3(n , log) {
		log?.(n);
		return n * n;
	}

	func2(3, func1);
	func3(13, func1);
}

// ex03();

function ex04() {
	console.log('\n------------ function declaration ---------------');
	{
		function f1() {	// function declaration
			console.log('function declaration');
		}

		f1();
		console.log('f1:', f1);
		let f2 = f1;
		f2();
	}

	console.log('\n------------ function expression ---------------');
	{
		let f3 = function() {
			console.log('function expression');
		};

		console.log(f3);
		f3();
		let f4 = f3;
		f4();
	}

	console.log('\n------------ callbacks functions ---------------');
	{
		function ask(question, yes, no) {
			if (question) {
				yes();
			} else {
				no();
			}
		}

		function f_yes() {
			console.log('YES!');
		}

		ask(true, function(){ console.log('yes');}, function(){ console.log('no way!');});
		ask(false, function(){ console.log('yes');}, function(){ console.log('no way!');});
		ask(true, f_yes, function(){ console.log('no way!');});
	}
}

// ex04();

function ex05() {
	console.log('\n-------------- arrow functions ---------------');
	function sum1(a, b) {
		return a + b;
	}
	const sum2 = function(a, b) { return a + b; };
	const sum3 = (a, b) => a + b;

	console.log('sum1:', sum1(2, 3));
	console.log('sum2:', sum2(2, 3));
	console.log('sum3:', sum3(2, 3));

	const double = n => n * 2;
	console.log('double:', double(5));

	const hello = () => 'arrow function without arguments';
	console.log('no args:', hello());

	const sum = (a, b) => {
		let result = a + b;
		return result;
	};
	console.log('sum:', sum(1, 2));

	// остаточные параметры
	const f1 = (a1, a2, ...rest) => console.log('rest:', rest);
	f1(1, 2, 3, 4, 5);

	// multiline text
	let str = `first line
	second line
	and third line`;
	console.log(str);
}

ex05();

function ex06() {
	console.log('\n------------ Rest/Spread ---------------');
	{
		function f1(a, b, ...rest) {
			console.log(a, b, rest);
		}

		f1(1, 2, 3, 4, 5);

		const arr = [7, 8];
		f1(...arr, 3, 4, 5);
		f1(...arr, arr);
		f1(...arr, ...[0, 9, 5]);

		const obj = { name: 'Jack', age: 30 };
		console.log({ sex: 'male', ...obj });
	}
}

ex06();
