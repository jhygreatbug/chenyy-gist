/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    var ans = nums[0] + nums[1] + nums[2] - target;
    
    var cmp = function (a, b) {
        return a > b ? 1 : -1;
    }
    
    nums.sort(cmp);
    
    var len = nums.length;
    var i = 0;
    while (i < len - 2) {
        var l = i + 1;
        var r = len - 1;
        while (l < r) {
            var tSum = nums[i] + nums[l] + nums[r] - target;
            if (Math.abs(ans) > Math.abs(tSum)) {
                ans = tSum;
            }
            if (tSum === 0) {
                return target;
            } else if (tSum > 0) {
                r --;
                while (nums[r] === nums[r + 1]) r --;
            } else {
                l ++;
                while (nums[l - 1] === nums[l]) l ++;
            }
        }
        i ++;
        while (nums[i - 1] === nums[i]) i ++;
    }
    
    return ans + target;
};