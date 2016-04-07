/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    var ans = [];
    
    var cmp = function (a, b) {
        return a > b ? 1 : -1;
    }
    
    nums.sort(cmp);
    
    var len = nums.length;
    var i = 0;
    while (i < len) {
        if (nums[i] > 0) {
            break;
        }
        var l = i + 1;
        var r = len - 1;
        while (l < r) {
            var tSum = nums[i] + nums[l] + nums[r];
            if (tSum === 0) {
                ans.push([nums[i], nums[l], nums[r]].sort(cmp));
                l ++;
                r --;
                while (nums[l - 1] === nums[l]) l ++;
                while (nums[r] === nums[r + 1]) r --;
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
    
    return ans;
};
