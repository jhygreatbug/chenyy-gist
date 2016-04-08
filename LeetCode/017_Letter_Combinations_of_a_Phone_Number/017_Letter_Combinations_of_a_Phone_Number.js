/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var a = ['*', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    var ans = [];
    var s = [];
    var len = digits.length;
    if (len === 0) {
        return ans;
    }
    (function (k) {
        if (k === len) {
            ans.push(s.join(''));
            return;
        }
        if (digits[k] === '0') {
            return;
        }
        var tNum = parseInt(digits[k]);
        for (var i = 0; i < a[tNum].length; i ++) {
            s.push(a[tNum][i]);
            arguments.callee(k + 1);
            s.pop();
        }
    })(0);
    
    return ans;
};