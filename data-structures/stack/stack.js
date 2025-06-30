const MAX_SIZE = 10;

export class Stack {
    constructor(size) {
        this.items = [];
        this.maxSize = size || MAX_SIZE;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    isFull() {
        return this.items.length === MAX_SIZE;
    }

    push(element) {
        if (this.isFull()) {
            throw new Error('stack is full');
        }
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('stack is empty');
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}
