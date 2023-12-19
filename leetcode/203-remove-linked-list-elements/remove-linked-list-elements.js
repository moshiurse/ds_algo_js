/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let temp = head;
    let p;
    while(temp){

        if(temp.val == val){
            if(!p){
                head = head.next;
                temp = temp.next;
            }else{
                p.next = temp.next;
                temp = temp.next;
            }
        }else{
            p = temp;
            temp = temp.next;
        }
    }
    return head;
};