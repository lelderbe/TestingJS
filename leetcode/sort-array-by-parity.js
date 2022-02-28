/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		for (; left < right; left++) {
			if (nums[left] % 2 != 0) {
				break;
			}
		}

		for (; left < right; right--) {
			if (nums[right] % 2 == 0) {
				break;
			}
		}

		[nums[left], nums[right]] = [nums[right], nums[left]];
	}

	return nums;
};

var sortArrayByParity_v2 = function(nums) {
	for (let left = 0, right = nums.length - 1; left < right; ) {
		while (left < right && nums[left] % 2 == 0) {
			left++;
		}

		while (left < right && nums[right] % 2 != 0) {
			right--;
		}

		[nums[left], nums[right]] = [nums[right], nums[left]];
	}

	return nums;
};

// Etalon solution
var sortArrayByParity_v3 = function(nums) {
	for (let left = 0, right = nums.length - 1; left < right; ) {
		if (nums[left] % 2 > nums[right] % 2) { // 1 > 0
			[nums[left], nums[right]] = [nums[right], nums[left]];
		}

		if (nums[left] % 2 == 0) left++;
		if (nums[right] % 2 != 0) right--;
	}

	return nums;
};

// Indian solution
var sortArrayByParity_v4 = function(nums) {
	for (let left = 0, right = nums.length - 1; left < right; ) {
		if (nums[left] % 2 != 0) {
			[nums[left], nums[right]] = [nums[right], nums[left]];
			right--;
		} else {
			left++;
		}
	}

	return nums;
};

console.log(sortArrayByParity_v4([3, 1, 2, 4]));
console.log(sortArrayByParity_v4([0]));
console.log(sortArrayByParity_v4([3, 1, 0, 7, 11, 2, 4]));
console.log(sortArrayByParity_v4([3, 1, 0, 7, 11, 2, 5]));
