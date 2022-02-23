/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
	let negativesIndex = nums.length - 1;
	let positivesIndex = nums.length;
	const arr = [];

	// find start indexes for negative and positive parts
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= 0) {
			positivesIndex = i;
			negativesIndex = i - 1;
			break;
		}
	}

	// add one by one from smallest to biggest until both indexes in range
	while (negativesIndex >= 0 && positivesIndex < nums.length) {
		if (-nums[negativesIndex] < nums[positivesIndex]) {
			arr.push(nums[negativesIndex] * nums[negativesIndex]);
			negativesIndex--;
		} else {
			arr.push(nums[positivesIndex] * nums[positivesIndex]);
			positivesIndex++;
		}
	}

	// add left numbers of negative part (if any)
	while (negativesIndex >= 0) {
		arr.push(nums[negativesIndex] * nums[negativesIndex]);
		negativesIndex--;
	}

	// add left numbers of positive part (if any)
	while (positivesIndex < nums.length) {
		arr.push(nums[positivesIndex] * nums[positivesIndex]);
		positivesIndex++;
	}

	return arr;
};

var sortedSquares_v2 = function(nums) {
	let leftIndex = 0;
	let rightIndex = nums.length - 1;
	const arr = new Array(nums.length);
	let arrIndex = arr.length - 1;

	while (leftIndex <= rightIndex) {
		if (Math.abs(nums[leftIndex]) > Math.abs(nums[rightIndex])) {
			arr[arrIndex] = nums[leftIndex] * nums[leftIndex];
			leftIndex++;
		} else {
			arr[arrIndex] = nums[rightIndex] * nums[rightIndex];
			rightIndex--;
		}
		arrIndex--;
	}

	return arr;
};

var sortedSquares_v3 = function(nums) {
	let leftIndex = 0;
	let rightIndex = nums.length - 1;
	const arr = new Array(nums.length);
	let arrIndex = arr.length - 1;

	while (leftIndex <= rightIndex) {
		const leftNum = nums[leftIndex] < 0 ? -nums[leftIndex] : nums[leftIndex];
		const rightNum = nums[rightIndex] < 0 ? -nums[rightIndex] : nums[rightIndex];
		if (leftNum > rightNum) {
			arr[arrIndex] = leftNum * leftNum;
			leftIndex++;
		} else {
			arr[arrIndex] = rightNum * rightNum;
			rightIndex--;
		}
		arrIndex--;
	}

	return arr;
};

var sortedSquares_v4 = function(nums) {
	let leftIndex = 0;
	let rightIndex = nums.length - 1;
	const arr = new Array(nums.length);
	let arrIndex = arr.length - 1;

	while (leftIndex <= rightIndex) {
		const leftNum = nums[leftIndex] * nums[leftIndex];
		const rightNum = nums[rightIndex] * nums[rightIndex];
		if (leftNum > rightNum) {
			arr[arrIndex] = leftNum;
			leftIndex++;
		} else {
			arr[arrIndex] = rightNum;
			rightIndex--;
		}
		arrIndex--;
	}

	return arr;
};

// console.log(sortedSquares([-7, -6, -5, -4, -1, 0, 3, 5, 7, 9, 10, 14, 18,]));
sortedSquares([-7, -6, -5, -4, -1, 0, 3, 5, 7, 9, 10, 14, 18,]);
console.time('v1');
sortedSquares([-7, -6, -5, -4, -1, 0, 3, 5, 7, 9, 10, 14, 18,]);
console.timeEnd('v1');

// console.log(sortedSquares_v2([-7, -6, -5, -4, -1, 0, 3, 5, 7, 9, 10, 14, 18,]));
sortedSquares_v2([-7, -6, -5, -4, -1, 0, 3, 5, 7, 9, 10, 14, 18,]);
console.time('v2');
sortedSquares_v2([-7, -6, -5, -4, -1, 0, 3, 5, 7, 9, 10, 14, 18,]);
console.timeEnd('v2');

// console.log(sortedSquares_v3([-7, -6, -5, -4, -1, 0, 3, 5, 7, 9, 10, 14, 18,]));
sortedSquares_v3([-7, -6, -5, -4, -1, 0, 3, 5, 7, 9, 10, 14, 18,]);
console.time('v3');
sortedSquares_v3([-7, -6, -5, -4, -1, 0, 3, 5, 7, 9, 10, 14, 18,]);
console.timeEnd('v3');

// console.log(sortedSquares_v4([-7, -6, -5, -4, -1, 0, 3, 5, 7, 9, 10, 14, 18,]));
sortedSquares_v4([-7, -6, -5, -4, -1, 0, 3, 5, 7, 9, 10, 14, 18,]);
console.time('v4');
sortedSquares_v4([-7, -6, -5, -4, -1, 0, 3, 5, 7, 9, 10, 14, 18,]);
console.timeEnd('v4');

// console.log(sortedSquares([-4, -1, 0, 3, 10]));
// console.log(sortedSquares([-1]));
// console.log(sortedSquares([-5,-3,-2,-1]));
