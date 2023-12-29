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
    let dummy = new ListNode(0);
    dummy.next = head;

    let temp = dummy;

    while(temp.next && temp.next.next){
       
        if(temp.next.val == temp.next.next.val){
           while(temp.next && temp.next.next && temp.next.val == temp.next.next.val){
               temp.next = temp.next.next;
           }
           temp.next = temp.next.next;
        }else{
            temp = temp.next;
        }
    }
    return dummy.next;
};