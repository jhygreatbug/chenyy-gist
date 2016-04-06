/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    var ans = 0;
    var i = 0;
    var j = height.length - 1;
    while (i < j) {
        ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));
        if (height[i] < height[j]) {
            i ++;
        } else {
            j --;
        }
    }
    return ans;
};
