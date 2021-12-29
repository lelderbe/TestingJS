function fibonacci_recursion(n) {
	const res = [0, 1];

	function fibonacci(n) {
		if (!res[n - 1])
			res[n - 1] = fibonacci(n - 1);
		return res[n - 1] + res[n - 2];
	}
	return fibonacci(n);
}

function fibonacci_iter(n) {
	let a = 1;
	let b = 1;
	// let c;
	for (let i = 3; i <= n; i++) {
		// c = a + b;
		// a = b;
		// b = c;
		[a, b] = [b, a + b];
	}
	return b;
}

console.log(fibonacci_recursion(3));	// 2
console.log(fibonacci_recursion(5));	// 5
console.log(fibonacci_recursion(7));	// 13
console.log(fibonacci_recursion(77));	// 5527939700884757

console.log(fibonacci_iter(3));	// 2
console.log(fibonacci_iter(5));	// 5
console.log(fibonacci_iter(7));	// 13
console.log(fibonacci_iter(77));	// 5527939700884757
