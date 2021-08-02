function ex_factorial_iteration(n) {
	let result = 1;

	for (let i = 2; i <= n; i++) {
		result = result * i;
	}
	return (result);
}

function ex_factorial_recursion(n) {
	if (n <= 1)
		return 1;
	return n * ex_factorial_recursion(n - 1);
}

let n = 5;
console.log(n + '! =', ex_factorial_iteration(n));
console.log(n + '! =', ex_factorial_recursion(n));
