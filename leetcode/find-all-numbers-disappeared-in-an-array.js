/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
	const result = [];

	// first pass: zero cells for existing numbers (index = number - 1)
	for (let i = 0; i < nums.length; i++) {
		const correctIndex = nums[i] - 1;
		if (nums[i] != 0 && nums[correctIndex] != 0) {
			[nums[i], nums[correctIndex]] = [nums[correctIndex], 0];
			i--;
		}
	}

	// second pass: check non-zero cells and return missed number (index + 1)
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != 0) {
			result.push(i + 1);
		}
	}

	return result;
};

var findDisappearedNumbers_v2 = function(nums) {
	const missedNumbers = [];

	// first pass: some variation of cyclic sort
	for (let i = 0; i < nums.length; i++) {
		const correctIndex = nums[i] - 1;
		if (nums[i] != nums[correctIndex]) {
			[nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
			i--;
		}
	}

	// second pass: check wrong numbers
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != i + 1) {
			missedNumbers.push(i + 1);
		}
	}

	return missedNumbers;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers_v2([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers_v2([1, 1]));
