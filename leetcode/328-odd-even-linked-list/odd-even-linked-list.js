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
var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenRef = head.next;
    let isOdd = true;
    let temp = head.next.next;
    while(temp != null){
        if(isOdd){
            odd.next = temp;
            odd = odd.next;
        }else{
            even.next = temp;
            even = even.next;
        }
        temp = temp.next;
        isOdd = !isOdd;
    }
    odd.next = evenRef;
    even.next = null;
    return head;
};