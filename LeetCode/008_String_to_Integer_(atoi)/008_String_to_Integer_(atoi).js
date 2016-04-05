/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    
    var INT32_MAX = 2147483647;
    var INT32_MIN = -2147483648;
    
    var ans = 0;
    
    str = str.trim();
    
    var len = str.length;
    if (len === 0) {
        return 0;
    }
    
    var isNegative = false;
    if (str[0] === '-') {
        isNegative = true;
    }
    
    var i = 0;
    if (str[0] === '-' || str[0] === '+') {
        i ++;
    }
    while (str[i] === '0') {
        i ++;
    }
    for (; i < len; i ++) {
        var num = parseInt(str[i]);
        if (isNaN(num)) {
            break;
        }
        
        ans = ans * 10 + num;
        if (!isNegative && ans >= INT32_MAX) {
            return INT32_MAX;
        }
        if (isNegative && ans + INT32_MIN >= 0) {
            return INT32_MIN;
        }
    }
    
    if (isNegative) {
        ans = -ans;
    }
    
    return ans;
};
