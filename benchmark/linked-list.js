class Node {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

export class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    size() {
        return this.size;
    }

    push(value) {
        const node = new Node(value, this.tail);
        if (!this.head) {
            this.head = node;
        }
        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
        this.size++;
    }

    pop() {
        if (this.size === 0) {
            return;
        }
        const value = this.tail.value;
        if (this.tail.prev) {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        } else {
            this.tail = null;
            this.head = null;
        }
        this.size--;
        return value;
    }

    shift() {
        if (this.size === 0) {
            return;
        }
        const value = this.head.value;
        if (this.head.next) {
            this.head.next.prev = null;
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.size--;
        return value;
    }

    unshift(value) {
        const node = new Node(value, null, this.head);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    toString() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr.toString();
    }
}

// const list = new DoubleLinkedList();
// list.push(1);
// list.push(3);
// list.push(5);
// console.log('list:', list.toString());
// console.log('pop:', list.pop());
// console.log('list:', list.toString());
// console.log('shift:', list.shift());
// console.log('list:', list.toString());
// console.log('pop:', list.pop());
// console.log('list:', list.toString());
// console.log('pop:', list.pop());
// console.log('list:', list.toString());
// list.unshift(2);
// console.log('list:', list.toString());
// list.push(4);
// console.log('list:', list.toString());
// list.unshift(0);
// console.log('list:', list.toString());
