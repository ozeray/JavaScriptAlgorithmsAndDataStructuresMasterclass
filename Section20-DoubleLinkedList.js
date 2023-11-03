// Head, tail, previous, next, length
// Can go backwards - Bidirectional
// Requires more memory than SLL, but provide more flexibility
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}
class DoubleLinkedList {
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
            newNode.previous = this.tail;
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
            this.tail = this.tail.previous;
            this.tail.next = null;
            current.previous = null;
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
            this.head.previous = null;
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
            this.head.previous = newNode;
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
                currentNode = currentNode.previous;
                counter--;
            }
        }

        return currentNode;
    }
}

let dll = new DoubleLinkedList();
dll.push(3);
dll.push(4);
dll.push(5);
dll.push(6);
console.log(dll.pop());
console.log(dll.shift());
console.log(dll.unshift(2));
console.log(dll.get(1));
console.log(dll.get(2));