/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var a = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    var ans = 0;
    ans += a[s[0]];
    
    var len = s.length;
    for (var i = 1; i < len; i ++) {
        if (a[s[i - 1]] < a[s[i]]) {
            ans += a[s[i]] - a[s[i - 1]] * 2;
        } else {
            ans += a[s[i]];
        }
    }
    
    return ans;
};