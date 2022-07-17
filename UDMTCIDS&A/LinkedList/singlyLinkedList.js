class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
        return this;
    }

    append(value) {
        const newNode = {
            value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        let currentNode = this.head;
        this.head = {
            value,
            next: currentNode
        }
        this.length++;
        return this;
    }

    printList() {
        let currentNode = this.head;
        let array = [];
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(array);
        return array;
    }

    reverse() {
        if(!this.head.next) {
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;  
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }

    insert(index, value) {
        if(index >= this.length){
            return this.append(value);
        }

        const newNode = {
            value,
            next: null
        }

        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter != index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}

let myLink = new LinkedList(1);
myLink.append(2);
myLink.append(4);
myLink.append(6);
myLink.prepend(10);
myLink.printList();
myLink.remove(3);
myLink.reverse();