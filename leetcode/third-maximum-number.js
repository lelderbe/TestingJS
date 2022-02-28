/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
	const maxs = [];

	for (let num of nums) {
		if (maxs.includes(num)) {
			continue;
		}

		[maxs[0], num] = !maxs[0] || num > maxs[0] ? [num, maxs[0]] : [maxs[0], num];
		[maxs[1], num] = !maxs[1] || num > maxs[1] ? [num, maxs[1]] : [maxs[1], num];
		[maxs[2], num] = !maxs[2] || num > maxs[2] ? [num, maxs[2]] : [maxs[2], num];
	}

	return maxs[2] ?? maxs[0];
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]));
