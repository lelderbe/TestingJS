/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
	let evenCount = 0;	
	for (let num of nums) {
		let digits = 1;
		while ((num = num / 10 | 0)) {
			digits++;
		}
		evenCount = (digits % 2 == 0) ? evenCount + 1 : evenCount;
	}
	return evenCount;
};

var findNumbers_v2 = function(nums) {
	let evenCount = 0;
	for (let num of nums) {
		while ((num = num / 100) > 1);
		evenCount = num >= 0.1 ? evenCount + 1 : evenCount;
	}
	return evenCount;
};

console.log(findNumbers([12,345,2,6,7896]));
console.log(findNumbers([555,901,482,1771]));
console.log(findNumbers_v2([12,345,2,6,7896]));
console.log(findNumbers_v2([555,901,482,1771]));
