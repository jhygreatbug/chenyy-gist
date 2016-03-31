/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    
    var hash = new Map();
    var dp = [0];
    var maxLen = 0;
    
    for (var i = 0; i < s.length; i ++) {
        var flag = true;
        for (var j = i - 1; j >= i - dp[i]; j --) {
            if (s[i] === s[j]){
                break;
            }
        }
        dp[i + 1] = i - j;
        
        maxLen = Math.max(maxLen, dp[i + 1]);
    }
    
    return maxLen;
};
