/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
	let i = 0; // i - slow-runner, j - fast-runner
	for (let j = 0; j < nums.length; j++) {
		if (nums[j] != 0) {
			nums[i] = nums[j];
			i++;
		}
	}
	while (i < nums.length) {
		nums[i++] = 0;
	}
};

var moveZeroes_v2 = function(nums) { // i - slow-runner, j - fast-runner
	for (let i = 0, j = 0; j < nums.length; j++) {
		if (nums[j] != 0) {
			[nums[i++], nums[j]] = [nums[j], nums[i]];
		}
	}
};

// const arr = [0, 1, 0, 3, 12];
const arr = [4, 1, 0, 1, 0, 3, 12];
// const arr = [0];

console.log(arr);
moveZeroes_v2(arr);
console.log(arr);
