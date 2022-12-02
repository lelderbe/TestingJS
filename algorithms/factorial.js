function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function factorial_recursion(n) {
	if (n == 1) {
		return 1;
	}
	return n * factorial_recursion(n - 1);
}

function factorial_iter(n) {
	let result = 1;
	for (let i = 2; i <= n; i++) {
		result *= i;
	}
	return result;
}

console.log(factorial(5));
console.log(factorial_recursion(5));
console.log(factorial_iter(5));
