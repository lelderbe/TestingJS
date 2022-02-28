/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
	const set = new Set();
	for (let value of arr) {
		if (set.has(2 * value) || set.has(value / 2)) {
			return true;
		}
		set.add(value);
	}
	return false;
};

console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([7, 1, 14, 11]));
console.log(checkIfExist([3, 1, 7, 11]));
console.log(checkIfExist([0, 1, 7, 11]));
console.log(checkIfExist([0, 1, 0, 11]));
