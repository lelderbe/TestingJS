/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
	if (arr.length < 3) {
		return false;
	}

	let topIndex = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] == arr[i - 1]) {
			return false;
		}
		if (arr[i] < arr[i - 1]) {
			topIndex = i - 1;
			break;
		}
	}

	if (topIndex == 0 || topIndex == arr.length - 1) {
		return false;
	}

	for (let i = topIndex + 1; i < arr.length; i++) {
		if (arr[i] >= arr[i - 1]) {
			return false;
		}
	}

	return true;
};

var validMountainArray_v2 = function(arr) {
	let topIndex = 0;
	for (let i = topIndex + 1; i < arr.length; i++) {
		if (arr[i] <= arr[i - 1]) {
			topIndex = i - 1;
			break;
		}
	}

	for (let i = topIndex + 1; i < arr.length; i++) {
		if (arr[i] >= arr[i - 1]) {
			return false;
		}
	}

	if (arr.length < 3 || topIndex == 0 || topIndex == arr.length - 1) {
		return false;
	}

	return true;
};

// Etalon solution
var validMountainArray_v3 = function(arr) {
	let i = 0;

	// go up
	while (i + 1 < arr.length && arr[i] < arr[i + 1]) {
		i++;
	}

	// check top
	if (arr.length < 3 || i == 0 || i == arr.length - 1) {
		return false;
	}

	// go down
	while (i + 1 < arr.length && arr[i] > arr[i + 1]) {
		i++;
	}

	// reached the end?
	return i == arr.length - 1;
};

// Etalon solution with two climbers
var validMountainArray_v4 = function(arr) {
	let [i, j] = [0, arr.length - 1];

	// left goes up
	while (i + 1 < arr.length && arr[i] < arr[i + 1]) {
		i++;
	}

	// check top
	if (arr.length < 3 || i == 0 || i == arr.length - 1) {
		return false;
	}

	// right goes up
	while (j - 1 >= 0 && arr[j] < arr[j - 1]) {
		j--;
	}

	// found tops are the same?
	return i == j;
};

console.log(validMountainArray_v4([2, 1]));
console.log(validMountainArray_v4([3, 5, 5]));
console.log(validMountainArray_v4([0, 3, 2, 1]));
console.log(validMountainArray_v4([4, 3, 2, 1]));
console.log(validMountainArray_v4([4, 5, 6, 7]));
