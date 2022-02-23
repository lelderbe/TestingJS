/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			for (let j = arr.length - 1; j > i; j--) {
				arr[j] = arr[j - 1];
			}
			i++;
		}
	}
};

var duplicateZeros_v2 = function(arr) {
	let zerosCount = 0;
	let edgeZero = 0;

	// count zeros
	for (let i = 0; i < arr.length - zerosCount; i++) {
		if (arr[i] == 0) {
			if (i == arr.length - 1 - zerosCount) {
				edgeZero = 1;
			} else {
				zerosCount++;
			}
		}
	}

	// console.log('zeroes:', zerosCount, 'extra:', edgeZero);

	// move from end to begin
	for (let i = arr.length - 1; i >= 0; i--) {
		arr[i] = arr[i - zerosCount];
		if (arr[i] == 0) {
			if (edgeZero) {
				edgeZero = 0;
				continue;
			}
			zerosCount--;
			if (i > 0) {
				arr[i - 1] = 0;
			}
			i--;
		}
	}
};

// const arr = [];
// const arr = [1];
// const arr = [0];
// const arr = [0, 1];
// const arr = [1, 5, 2, 0, 6, 8, 0, 6, 0];
// const arr = [0, 0, 0, 0, 0, 0, 0];
// const arr = [8, 4, 5, 0, 0, 0, 0, 7];
const arr = [8, 0, 5, 0, 4, 0, 0, 7];
const arr1 = [1, 0, 2, 3, 0, 4, 5, 0];
const arr2 = [1, 0, 2, 3, 0, 4, 5, 0];
const arr3 = [1, 0, 2, 3, 0, 4, 5, 0];

// console.log('before:', arr);
// duplicateZeros_v2(arr);
// console.log('after:', arr);


// console.log('before:', arr);
// duplicateZeros(arr1);
// console.time('v1');
// duplicateZeros(arr1);
// console.timeEnd('v1');
// console.log('after:', arr);

console.log('before:', arr2);
duplicateZeros_v2(arr2);
console.time('v2');
duplicateZeros_v2(arr2);
console.timeEnd('v2');
console.log('after:', arr2);
