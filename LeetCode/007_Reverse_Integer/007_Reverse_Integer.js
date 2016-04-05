/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    if (x === 0) {
        return 0;
    }
    
    var INT32_MAX = 2147483647;
    var INT32_MIN = -2147483648;
    
    var isNegative = false;
    if (x < 0) {
        isNegative = true;
        x = -x;
    }
    
    var ans = 0;
    
    while (x % 10 === 0) {
        x = parseInt(x / 10);
    }
    while (x > 0) {
        ans = ans * 10 + x % 10;
        x = parseInt(x / 10);
    }
    
    if (isNegative) {
        ans = -ans;
    }
    
    if (ans > INT32_MAX || ans < INT32_MIN) {
        return 0;
    }
    
    return ans;
};
