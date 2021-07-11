// simple functions
function ex_functions_1() {
	function plus1(x) {
		return x + 1;
	}

	function square(x) {
		return x * x;
	}

	y = 3;
	console.log(plus1(y));
	console.log(square(plus1(y)));
}

// ex_functions_1();

// arrow functions
function ex_functions_2() {
	const plus1 = x => x + 1;
	const square = x => x * x;

	y = 3;
	console.log(plus1(y));
	console.log(square(plus1(y)));
}

// ex_functions_2();

// передача функции в параметре
function ex_functions_3() {
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

ex_functions_3();
