/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {


    var total = nums1.length + nums2.length;
    var half = parseInt(total / 2)
    var list = nums1.concat(nums2).sort(function(a, b) {
        return a - b;
    });
    console.log(total, half, list)
    
    if (total % 2 === 0) {
        return (list[half - 1] + list[half]) / 2;
    } else {
        return list[half];
    }
    
};