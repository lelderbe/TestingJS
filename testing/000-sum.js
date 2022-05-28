export function sum(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Exception();
	}

	if (a < 0 || b < 0) {
		throw new Exception();
	}

	return a + b;
}

// console.log(sum(1, 2));
