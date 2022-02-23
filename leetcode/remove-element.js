/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	let dx = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == val) {
			dx++;
		} else {
			nums[i - dx] = nums[i];
		}
	}

	return nums.length - dx;
};

// Etalon solution
var removeElement_v2 = function(nums, val) {
	let i = 0; // slow-runner, j - fast-runner

	for (let j = 0; j < nums.length; j++) {
		if (nums[j] != val) {
			nums[i] = nums[j];
			i++;
		}
	}

	return i;
};

var removeElement_v3 = function(nums, val) {
	let left = 0;
	let right = nums.length - 1;

	while (right >= 0 && nums[right] == val) {
		right--;
	}

	while (left <= right) {
		if (nums[left] == val) {
			nums[left] = nums[right];
			right--;
			while (right >= left && nums[right] == val) {
				right--;
			}
		}
		left++;
	}

	return right + 1;
};

// Etalon solution
var removeElement_v4 = function(nums, val) {
	let i = 0;
	let length = nums.length;

	while (i < length) {
		if (nums[i] == val) {
			nums[i] = nums[length - 1];
			length--;
		} else {
			i++;
		}
	}

	return length;
};

// const arr = [3, 2, 2, 3];
// const val = 3;
const arr = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

// console.log(arr);
// console.log(removeElement(arr, val));
console.log(removeElement(arr, val));
console.time('v1');
removeElement(arr, val);
console.timeEnd('v1');
// console.log(arr);

const arr3 = [0, 1, 2, 2, 3, 0, 4, 2];
const val3 = 2;

// console.log(arr3);
// console.log(removeElement(arr, val));
console.log(removeElement(arr3, val3));
console.time('v3');
removeElement(arr3, val3);
console.timeEnd('v3');
// console.log(arr3);


const arr2 = [0, 1, 2, 2, 3, 0, 4, 2];
const val2 = 2;

// console.log(arr2);
console.log(removeElement_v2(arr2, val2));
console.time('v2');
removeElement_v2(arr2, val2);
console.timeEnd('v2');
// console.log(arr2);
