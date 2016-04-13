/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    var maxK = n * 2;
    var ans = [];
    var str = [];
    
    (function (k, leftNum) {
        if (k === maxK) {
            ans.push(str.join(''));
            return;
        }
        if (leftNum < n) {
            str.push('(');
            arguments.callee(k + 1, leftNum + 1);
            str.pop();
        }
        if (k < leftNum * 2) {
            str.push(')');
            arguments.callee(k + 1, leftNum);
            str.pop();
        }
        return;
    })(0, 0);
    
    return ans;
};