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
var mergeTwoLists = function(l1, l2) {
    if (l1 === null && l2 === null) {
        return null;
    }
    var head = new ListNode();
    var nodeh = head;
    var node1 = l1;
    var node2 = l2;
    while (node1 !== null || node2 !== null) {
        nodeh.next = new ListNode();
        if (node1 === null) {
            nodeh.val = node2.val;
            node2 = node2.next;
        } else if (node2 === null) {
            nodeh.val = node1.val;
            node1 = node1.next;
        } else {
            if (node1.val < node2.val) {
                nodeh.val = node1.val;
                node1 = node1.next;
            } else {
                nodeh.val = node2.val;
                node2 = node2.next;
            }
        }
        if (node1 !== null || node2 !== null) {
            nodeh = nodeh.next;
        }
    }
    nodeh.next = null;
    
    return head;
};