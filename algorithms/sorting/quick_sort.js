function quick_sort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	const pivotIndex = arr.length / 2 | 0;
	const less = [];
	const greater = [];

	for (let i = 0; i < arr.length; i++) {
		if (i == pivotIndex) {
			continue;
		}
		if (arr[i] < arr[pivotIndex]) {
			less.push(arr[i]);
		} else {
			greater.push(arr[i]);
		}
	}

	// console.log('less:', less, 'pivot:', arr[pivotIndex], 'greater:', greater);
	return [...quick_sort(less), arr[pivotIndex], ...quick_sort(greater)];
}

console.log(quick_sort([]));
console.log(quick_sort([5]));
console.log(quick_sort([5, 2]));
console.log(quick_sort([10, 5, 2]));
console.log(quick_sort([10, 5, 2, 3]));
