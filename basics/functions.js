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

ex_functions_1();

// arrow functions
function ex_functions_2() {
	const plus1 = x => x + 1;
	const square = x => x * x;

	y = 3;
	console.log(plus1(y));
	console.log(square(plus1(y)));
}

ex_functions_2();
