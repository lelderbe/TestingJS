/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 1) {
            maxCount = maxCount < count ? count : maxCount;
            count = 0;
        } else {
            count++;
        }
    }
    return maxCount < count ? count : maxCount;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));
