function binary_search(arr, value) {
	let low = 0;
	let high = arr.length - 1;

	while (low <= high) {
		const index = (low + high) / 2 | 0;
		if (value === arr[index]) {
			return index;
		}
		if (value < arr[index]) {
			high = index - 1;
		} else {
			low = index + 1;
		}
	}
	return -1;
}

// console.log(binary_search([3], 2));
// console.log(binary_search([3], 3));
// console.time();
console.log(binary_search([1, 2, 3, 4, 5], 2));
// console.timeEnd();
// console.log(binary_search([1, 2, 3, 4, 5], 4));
// console.log(binary_search([1, 2, 3, 4, 5], 1));
// console.log(binary_search([1, 2, 3, 4, 5], 0));
console.log(binary_search([1, 2, 3, 4, 5], 5));
// console.log(binary_search([1, 2, 3, 4, 5], 6));
