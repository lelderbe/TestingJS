function binary_search(arr, value, low = 0, high = arr.length - 1) {
	if (low > high) {
		return -1;
	}
	const index = Math.floor((low + high) / 2);
	if (value === arr[index]) {
		return index;
	}
	if (value < arr[index]) {
		return binary_search(arr, value, low, index - 1);
	}
	if (value > arr[index]) {
		return binary_search(arr, value, index + 1, high);
	}
}

console.log(binary_search([3], 2));
console.log(binary_search([3], 3));
console.log(binary_search([1, 2, 3, 4, 5], 2));
console.log(binary_search([1, 2, 3, 4, 5], 4));
console.log(binary_search([1, 2, 3, 4, 5], 1));
console.log(binary_search([1, 2, 3, 4, 5], 0));
console.log(binary_search([1, 2, 3, 4, 5], 5));
console.log(binary_search([1, 2, 3, 4, 5], 6));
