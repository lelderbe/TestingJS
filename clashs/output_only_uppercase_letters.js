const s = 'abcAnnBd fC';

/**
 * For loop with concatenation
 */
function ex01() {
	let result = '';
	for (c of s) {
		if (c >= 'A' && c <= 'Z') {
			result += c;
		}
	}

	console.log(result);
}

ex01();

/**
 * For loop with array
 */
function ex02() {
	let result = [];
	for (c of s) {
		if (c >= 'A' && c <= 'Z') {
			result.push(c);
		}
	}

	console.log(result.join(''));
}

ex02();

/**
 * Reduce with concatenation
 */
function ex03() {
	const result = Array.from(s).reduce((a, c) => c >= 'A' && c <= 'Z' ? a + c : a, '');
	console.log(result);
}

ex03();

/**
 * Filter
 */
function ex04() {
	const result = [...s].filter(c => c >= 'A' && c <= 'Z').join('');
	console.log(result);
}

ex04();
