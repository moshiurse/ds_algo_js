// Given the head of a singly linked list, reverse the list, and return the reversed list.



// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
    return {val: this.val, next: this.next};
}

//  Generate Linked List

const arrayToLinkedList = (arr) => {
    if (!arr.length) return new ListNode(null, null);
    let index = arr.length - 1;
    let head = null;
    while (index >= 0) {
        let node = new ListNode(arr[index], head);
        index--;
        head = node;
    }
    return head;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
*/
var reverseList = function (heads) {
    let head = arrayToLinkedList(heads);

    if(!head) return null;
    if(head.val == null || !head.next) return head;

    let first = head;
    let root = first.next;
    let node = head;
    while (root != null) {
        const temp = root.next;
        root.next = first;
        first = root;
        root = temp;
    }
    head.next = null;
    head = first;
    return head;
    
};

console.log(reverseList([1,2,3,4,5]));