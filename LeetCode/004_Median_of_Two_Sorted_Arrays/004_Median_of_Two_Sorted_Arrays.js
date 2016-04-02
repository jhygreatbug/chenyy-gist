/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    
    var total = nums1.length + nums2.length;
    
    var divideAndConquer = function (a1, i1, a2, i2, k) {
        if (a1.length + i2 < a2.length + i1) {
            return divideAndConquer(a2, i2, a1, i1, k);
        }
        if (i2 >= a2.length) {
            return a1[i1 + k - 1];
        }
        if (k === 1) {
            return Math.min(a1[i1], a2[i2]);
        }
        
        var k2 = Math.min(parseInt(k / 2), a2.length);
        var k1 = k - k2;
        if (a1[i1 + k1 - 1] < a2[i2 + k2 - 1]) {
            return divideAndConquer(a1, i1 + k1, a2, i2, k - k1);
        } else if (a1[i1 + k1 - 1] > a2[i2 + k2 - 1]) {
            return divideAndConquer(a1, i1, a2, i2 + k2, k - k2);
        } else {
            return a1[i1 + k1 - 1];
        }
    }
    
    if (total % 2 === 0) {
        return (divideAndConquer(nums1, 0, nums2, 0, parseInt((total + 1) / 2))
            + divideAndConquer(nums1, 0, nums2, 0, parseInt((total + 1) / 2 + 1))) / 2;
    } else {
        return divideAndConquer(nums1, 0, nums2, 0, parseInt((total + 1) / 2));
    }
};