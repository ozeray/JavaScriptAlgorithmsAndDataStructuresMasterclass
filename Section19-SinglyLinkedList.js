// Head, tail + length
// Nodes with values and pointers to other nodes
// No indexes, no random access.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
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

        let found = this.get(index - 1);
        let newNode = new Node(value);
        let next = found.next;
        found.next = newNode;
        newNode.next = next;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    print() {
        let arr = []
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr.join(","));
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let previous = null;
        let next;

        for (let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        return this;
    }
}

let list = new SinglyLinkedList();
list.push(4);
list.push(2);
list.push(1);
list.print();
list.reverse().print();