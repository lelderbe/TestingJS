const process = require('process');

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
	this.capacity = k;
	this.tail = new this.Node();
	this.head = this.tail;
	for (let i = 1; i < this.capacity; i++) {
		this.head = new this.Node(undefined, this.head);
	}
	this.tail.next = this.head;
	this.length = 0;
};

/**
 * @param {number} value
 * @return {Node}
 */
MyCircularQueue.prototype.Node = function (value, next) {
	this.value = value ? value : undefined;
	this.next = next ? next : null;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
	if (this.isFull()) {
		return false;
	}
	this.tail = this.tail.next;
	this.tail.value = value;
	this.length++;
	return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
	if (this.isEmpty()) {
		return false;
	}
	this.head = this.head.next;
	this.length--;
	return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
	return this.isEmpty() ? -1 : this.head.value;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
	return this.isEmpty() ? -1 : this.tail.value;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
	return this.length == 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
	return this.length == this.capacity;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

MyCircularQueue.prototype.print = function () {
	let head = this.head;
	process.stdout.write('{ ');
	for (let i = 0; i < this.length; i++) {
		process.stdout.write(head.value + ' ');
		head = head.next;
	}
	console.log('}');
}

const actions = ["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"];
const params = [[3], [1], [2], [3], [4], [], [], [], [4], []];

// const actions = ["MyCircularQueue", "enQueue", "Rear", "Rear", "deQueue", "enQueue", "Rear", "deQueue", "Front", "deQueue", "deQueue", "deQueue"];
// const params = [[6], [6], [], [], [], [5], [], [], [], [], [], []];

var obj = new MyCircularQueue(...params[0]);

for (let i = 1; i < actions.length; i++) {
	console.log(`${actions[i]}(${params[i]})`);
	console.log(obj[actions[i]](...params[i]));
	obj.print();
	// console.log(obj);
}
