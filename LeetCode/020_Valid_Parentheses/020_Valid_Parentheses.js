/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    var stack = [];
    var table = {
        '(': -1,
        '[': -2,
        '{': -3,
        ')': 1,
        ']': 2,
        '}': 3
    }
    
    var len = s.length;
    var i;
    for (i = 0; i < len; i ++) {
        if(table[s[i]] < 0) {
            stack.push(s[i]);
        } else {
            if (stack.length > 0 && table[stack[stack.length - 1]] + table[s[i]] === 0) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};