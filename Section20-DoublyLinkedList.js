// Head, tail, prev, next, length
// Can go backwards - Bidirectional
// Requires more memory than SLL, but provide more flexibility
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            current.prev = null;
        }
        this.length--;
        return current;
    }

    shift() {
        if (!this.head) return undefined;

        let current = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = current.next;
            this.head.prev = null;
            current.next = null;
        }
        this.length--;
        return current;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter, currentNode;
        if (index < this.length > 2) {
            counter = 0;
            currentNode = this.head;
            while (counter !== index) {
                currentNode = currentNode.next;
                counter++;
            }
        } else {
            counter = this.length - 1;
            currentNode = this.tail;
            while (counter !== index) {
                currentNode = currentNode.prev;
                counter--;
            }
        }
        return currentNode;
    }

    set(index, value) {
        let found = this.get(index)
        if (found) {
            found.val = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);

        let newNode = new Node(value);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let removed = this.get(index);
        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;
        removed.next = null;
        removed.prev = null;
        this.length--;
        return removed;
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let prevNode, nextNode;

        for (let i = 0; i < this.length; i++) {
            prevNode = current.prev;
            nextNode = current.next;
            current.prev = nextNode;
            current.next = prevNode;
            current = nextNode;
        }

        return this;
    }
}

// let dll = new DoublyLinkedList();
// dll.push(3);
// dll.push(4);
// dll.push(5);
// dll.push(6);
// console.log(dll.pop());
// console.log(dll.shift());
// console.log(dll.unshift(2));
// console.log(dll.get(1));
// console.log(dll.get(2));
// console.log(dll.reverse());

let doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.reverse();
console.log(doublyLinkedList.length); // 4
console.log(doublyLinkedList.head.val); // 20
console.log(doublyLinkedList.head.next.val); // 15
console.log(doublyLinkedList.head.next.next.val); // 10
console.log(doublyLinkedList.head.next.next.next.val); // 5