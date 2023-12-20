console.log('Linked List');

function ListNode(value) {
    return {
        val: (value===undefined ? 0 : value),
        next: null
    }
}

function arrayToLinkedList(array) {
    let head;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(!head){
            head = ListNode(element)
        }else{
            let curr = head;
            while(curr.next != null){
                curr = curr.next;
            }
            curr.next = ListNode(element);
        }
        
    }
    return head;    
}

function displayLinkedList(head) {
    let array = [];

    let curr = head;
    while(curr != null){
        array.push(curr.val);
        curr = curr.next;
    }

    return array;
}

function insertToLinkedList(head, pos) {
    
}

function removeLinkedListValue(head, value) {

}

function rotateLinkedList(head, k) {

}

// console.log(arrayToLinkedList([1,2,3]));

const linkedList = arrayToLinkedList([3,4,5,6,78,9,10]);

console.log(displayLinkedList(linkedList));

rotateLinkedList(linkedList, 2);