/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
    var cmp = function (a, b) {
        return a > b ? 1 : -1;
    }
    nums.sort(cmp);
    var ans = [];
    var len = nums.length;
    var hash = new Map();
    
    var i, j;
    for (i = len; i > 1; i --) {
        if (i != len && nums[i + 1] === nums[i]) {
            continue;
        }
        for (j = i - 1; j > 0; j --) {
            if (j != i - 1 && nums[j + 1] === nums[j]) {
                continue;
            }
            var tSum = nums[i] + nums[j];
            if (hash.has(tSum)) {
                hash.get(tSum).push([j, i]);
            } else {
                hash.set(tSum, [[j, i]]);
            }
        }
    }
    
    for (i = 0; i < len - 3; i ++) {
        if (i !== 0 && nums[i - 1] === nums[i]) {
            continue;
        }
        for (j = i + 1; j < len - 2; j ++) {
            if (j != i + 1 && nums[j - 1] === nums[j]) {
                continue;
            }
            var tTarget = target - (nums[i] + nums[j]);
            if (hash.has(tTarget)) {
                var a = hash.get(tTarget);
                var aLen = a.length;
                for (var k = 0; k < aLen; k ++) {
                    if (j < a[k][0]) {
                        ans.push([nums[i], nums[j], nums[a[k][0]], nums[a[k][1]]]);
                    }
                }
            }
        }
    }
    
    return ans;
};