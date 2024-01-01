/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let count = 1;

    let first = head;
    let curr = head;
    while(count < left){
        first = curr;
        curr = curr.next;
        count++;
    }

    let prev = null;
    let last = curr; 
    while(count >=  left && count <= right){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }
    first.next = prev;
    last.next = curr;
    return left == 1 ? prev : head;
};