/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let temp = head;
    let count = 0;
    let values = [];
    while(temp != null){
        count++;
        values.push(temp.val);
        temp = temp.next;
    }
    let temp2 = head;
    let count2 = 0;
    while(temp2 != null){
        count2++;
        if(k == count2){
            temp2.val = values[count-k];
        }
        if(count2 == count-k+1){
            temp2.val = values[k-1];
        }
        temp2 = temp2.next;
    }
    return head;
};