/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head;
    while(curr != null){
        let temp = curr;

        while(temp != null && temp.val == curr.val){
            temp = temp.next;
        }
        curr.next = temp;
        curr = curr.next;
    }

    return head;
};