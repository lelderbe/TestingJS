function sum_recursion(arr, index = 0) {
	if (index == arr.length) {
		return 0;
	}
	return arr[index] + sum_recursion(arr, index + 1);
}

function sum_iterate(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

console.log(sum_iterate([1, 2, 3, 4, 5]));
console.log(sum_recursion([1, 2, 3, 4, 5]));
console.log(sum_recursion([2]));
