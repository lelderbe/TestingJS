/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let currentIndex = 1;
	let nextIndex = 1;
	while (nextIndex < nums.length) {
		if (nums[currentIndex - 1] != nums[nextIndex]) {
			nums[currentIndex] = nums[nextIndex];
			currentIndex++;
		}
		nextIndex++;
	}
	return currentIndex;
};

var removeDuplicates_v2 = function(nums) {
	let i = 1; // i - slow-runner, j - fast-runner
	for (let j = 1; j < nums.length; j++) {
		if (nums[j - 1] != nums[j]) {
			nums[i] = nums[j];
			i++;
		}
	}
	return i;
};

// const arr = [1];
// const arr = [1, 1, 2];
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates(arr), arr);
console.time('v1');
removeDuplicates(arr);
console.timeEnd('v1');

const arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates_v2(arr2), arr2);
console.time('v2');
removeDuplicates_v2(arr2);
console.timeEnd('v2');
