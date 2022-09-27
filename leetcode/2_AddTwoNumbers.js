// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

function ListNode(val, next) {
    val = (val === undefined ? 0 : val)
    next = (next === undefined ? null : next)
    return {val, next};
}

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

var addTwoNumbers = function (l1s, l2s) {
    let l1 = arrayToLinkedList(l1s);
    let l2 = arrayToLinkedList(l2s);

    let reminder = 0;
    let value = 0;
    let root = {val: 0, next: null};
    let current = root;

    while (l1 != null || l2 != null) {
        if (l1 == null) {
            value = l2.val + reminder;
            l2 = l2.next;
        } else if (l2 == null) {
            value = l1.val + reminder;
            l1 = l1.next;
        } else {
            value = l1.val + l2.val + reminder;
            l1 = l1.next;
            l2 = l2.next;
        }

        if (reminder > 0) reminder--;
        if (value >= 10) {
            value = value - 10
            reminder++;
        }
        // result.push(value);
        let node = {val: value, next: null};
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }

    if (reminder > 0) {
        let node = {val: reminder, next: null};
        // while(current.next){
            current = current.next;
        // }
        current.next = node;
    }

    root = root.next;
    console.log(current);
    return root;
};

console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));