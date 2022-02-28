/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
	let top = -1;

	for (let i = arr.length - 1; i >= 0; i--) {
		const currentValue = arr[i];
		arr[i] = top;
		top = currentValue > top ? currentValue : top;
	}

	return arr;
};

// const arr = [17, 18, 5, 4, 6, 1];
const arr = [17];

console.log(arr);
replaceElements(arr);
console.log(arr);
