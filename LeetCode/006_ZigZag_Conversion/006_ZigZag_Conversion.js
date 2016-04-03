/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    var seg = numRows * 2 - 2;
    var ans = '';
    var len = s.length;
    
    if (numRows === 1) {
        return s;
    }
    
    for (var i = 0; i < numRows; i ++) {
        
        if (i === 0 || i + 1 === numRows) {
            
            for (var j = i; j < len; j += seg) {
                
                ans += s[j];
            }
        } else {
            
            var tSeg = seg - 2 * i;
            for (var j = i; j < len; j += seg) {
                
                ans += s[j];
                
                if (j + tSeg < len) {
                    ans += s[j + tSeg];
                }
            }
        }
    }
    
    return ans;
};