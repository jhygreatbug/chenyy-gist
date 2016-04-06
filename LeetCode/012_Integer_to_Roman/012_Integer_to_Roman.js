/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var a = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['', 'M', 'MM', 'MMM']
        ];
    
    var ans = '';
    
    ans += a[3][parseInt(num / 1000)];
    num %= 1000;
    ans += a[2][parseInt(num / 100)];
    num %= 100;
    ans += a[1][parseInt(num / 10)];
    num %= 10;
    ans += a[0][num];
    
    return ans;
};