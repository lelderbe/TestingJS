function selection_sort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minElemIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minElemIndex]) {
				minElemIndex = j;
			}
		}
		[arr[i], arr[minElemIndex]] = [arr[minElemIndex], arr[i]];
	}
	return arr;
}

console.log(selection_sort([2, 5, 0, 9, 3, 1, 8, 7]));
