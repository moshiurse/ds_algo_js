// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
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
* @param {ListNode} list1
* @param {ListNode} list2
* @return {ListNode}
*/
var mergeTwoLists = function (list1s, list2s) {

    let list1 = arrayToLinkedList(list1s);
    let list2 = arrayToLinkedList(list2s);

    let root = new ListNode(null);
    let head = root;
    let current1 = list1;
    let current2 = list2;
    if (current1 == null && current2 == null) return null;

    while (current1 !== null && current2 !== null) {
        if (current1.val <= current2.val) {
            root.next = current1;
            current1 = current1.next;
        } else {
            root.next = current2;
            current2 = current2.next;
        }

        root = root.next;
    }

    if (current1 == null) root.next = current2;
    if (current2 == null) root.next = current1;

    return head.next;
};

console.log(mergeTwoLists([1, 2, 3], [1, 3, 4]));