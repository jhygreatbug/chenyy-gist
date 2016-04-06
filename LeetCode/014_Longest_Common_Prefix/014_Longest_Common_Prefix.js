/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    var i = -1;
    
    var len = strs.length;
    if (len === 0) {
        return '';
    }
    
    var minLen = strs[0].length;
    for (i = 1; i < len; i ++) {
        minLen = Math.min(minLen, strs[i].length);
    }
    if (minLen === 0) {
        return '';
    }
    
    var prefix = '';
    for (i = 1; i <= minLen; i ++) {
        prefix = strs[0].substr(0, i);
        for (var j = 0; j < len; j ++) {
            if (strs[j].substr(0, i) !== prefix) {
                return prefix.substr(0, i - 1);
            }
        }
    }
    
    return prefix;
};