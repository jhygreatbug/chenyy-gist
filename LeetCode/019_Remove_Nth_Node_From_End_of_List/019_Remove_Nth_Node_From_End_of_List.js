/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var len = 0;
    var node = head;
    while (node !== null) {
        len ++;
        node = node.next;
    }
    
    node = head;
    target = len - n;
    for (var i = 1; i < target; i ++) {
        node = node.next;
    }
    if (target === 0) {
        head = head.next;
    } else if (target === len - 1) {
        node.next = null;
    } else {
        node.next = node.next.next;
    }
    
    return head;
};