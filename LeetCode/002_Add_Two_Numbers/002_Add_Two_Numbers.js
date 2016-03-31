/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    var ans = new ListNode(l1.val + l2.val);
    var t1 = l1;
    var t2 = l2;
    var ta = ans;
    
    while (t1 !== null || t2 !== null || ta.val >= 10) {
        
        if (t1 !== null) {
            t1 = t1.next;
        }
        if (t2 !== null) {
            t2 = t2.next;
        }
        
        var tSum = 0;
        if (t1 !== null) {
            tSum += t1.val;
        }
        if (t2 !== null) {
            tSum += t2.val;
        }
        tSum += parseInt(ta.val / 10);
        
        if (t1 !== null || t2 !== null || ta.val >= 10) {
            ta.next = new ListNode(tSum);
            ta.val %= 10;
            ta = ta.next;
        }
    }
    
    return ans
};