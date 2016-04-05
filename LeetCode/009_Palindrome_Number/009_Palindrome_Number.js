/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    var s = x.toString();
    
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i ++;
        j --;
    }
    
    return true;
};