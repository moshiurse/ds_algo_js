class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
        return this;
    }

    append(value) {
        const newNode = {
            value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        let currentNode = this.head;
        this.head = {
            value,
            next: currentNode,
            prev: null
        }
        this.length++;
        console.log(this);
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

    insert(index, value) {
        if(index >= this.length){
            return this.append(value);
        }

        const newNode = {
            value,
            next: null,
            prev: null
        }

        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        console.log(this);
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
// myLink.append(4);
myLink.insert(1,6);
// myLink.prepend(10);
// myLink.printList();
// myLink.remove(3);