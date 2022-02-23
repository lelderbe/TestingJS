function binary_search_recursion(arr, value, low = 0, high = arr.length - 1) {
	if (low > high) {
		return -1;
	}
	const index = Math.floor((low + high) / 2);
	if (value === arr[index]) {
		return index;
	}
	if (value < arr[index]) {
		return binary_search_recursion(arr, value, low, index - 1);
	}
	if (value > arr[index]) {
		return binary_search_recursion(arr, value, index + 1, high);
	}
}

function binary_search_iterate(arr, value) {
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

console.log(binary_search_recursion([3], 2));
console.log(binary_search_recursion([3], 3));
console.log(binary_search_recursion([1, 2, 3, 4, 5], 2));
console.log(binary_search_recursion([1, 2, 3, 4, 5], 4));
console.log(binary_search_recursion([1, 2, 3, 4, 5], 1));
console.log(binary_search_recursion([1, 2, 3, 4, 5], 0));
console.log(binary_search_recursion([1, 2, 3, 4, 5], 5));
console.log(binary_search_recursion([1, 2, 3, 4, 5], 6));
console.log(binary_search_iterate([1, 2, 3, 4, 5], 5));
