/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = new Map();
    var len = nums.length;
    hash.set(nums[0], 0);
    for (var i = 1; i < len; i ++) {
        if (hash.has(target - nums[i])) {
            return [hash.get(target - nums[i]), i];
        } else {
            hash.set(nums[i], i);
        }
    }
};