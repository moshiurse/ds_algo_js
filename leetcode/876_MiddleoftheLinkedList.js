// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

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
 var middleNode = function(heads) {

    let head = arrayToLinkedList(heads);

    if(head == null || head.next == null) return head;

    let map = {};
    let count = 0;

    while (head != null) {
        count++;
        map[count] = head;
        head = head.next;
    }

    let index = (Math.ceil(count / 2) - (count/2) == 0) ? (Math.ceil(count / 2) + 1) : Math.ceil(count / 2);
    return map[index];
    
};

console.log(middleNode([1,2,3,4,5]));