/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	let i = m + n - 1;
	let idx1 = m - 1;
	let idx2 = n - 1;

	while (idx1 >= 0 && idx2 >= 0) {
		nums1[i--] = nums1[idx1] > nums2[idx2] ? nums1[idx1--] : nums2[idx2--];
	}

	while (idx2 >= 0) {
		nums1[i--] = nums2[idx2--];
	}
};

var merge_v2 = function(nums1, m, nums2, n) {
	let i = m + n - 1;
	m = m - 1;
	n = n - 1;

	while (m >= 0 && n >= 0) {
		nums1[i--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
	}

	while (n >= 0) {
		nums1[i--] = nums2[n--];
	}
};

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = 3;
const n = 3;

// const nums1 = [1];
// const nums2 = [];
// const m = 1;
// const n = 0;

// const nums1 = [0];
// const nums2 = [1];
// const m = 0;
// const n = 1;

console.log(nums1);
console.log(nums2);
merge(nums1, m, nums2, n);
console.log(nums1);
