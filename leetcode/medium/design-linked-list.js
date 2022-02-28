const process = require('process');

var MyLinkedList = function() {
	this.head = null;
	this.length = 0;
};

MyLinkedList.prototype.Node = function(val) {
	this.val = val;
	this.next = null;
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
	if (index >= this.length) {
		return -1;
	}

	let ptr = this.head;
	for (let i = 0; i < index; i++) {
		ptr = ptr.next;
	}

	return ptr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
	const newNode = new this.Node(val);
	newNode.next = this.head;
	this.head = newNode;
	this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
	if (this.length == 0) {
		return this.addAtHead(val);
	}

	let ptr = this.head;
	while (ptr.next) {
		ptr = ptr.next;
	}

	const newNode = new this.Node(val);
	ptr.next = newNode;
	this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
	if (index > this.length) {
		return;
	}
	if (index == 0) {
		return this.addAtHead(val);
	}
	if (index == this.length) {
		return this.addAtTail(val);
	}

	let ptr = this.head;
	for (let i = 0; i < index - 1; i++) {
		ptr = ptr.next;
	}

	const newNode = new this.Node(val);
	newNode.next = ptr.next;
	ptr.next = newNode;
	this.length++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
	if (index >= this.length) {
		return;
	}
	if (index == 0) {
		this.head = this.head.next;
		this.length--;
		return;
	}

	let ptr = this.head;
	for (let i = 0; i < index - 1; i++) {
		ptr = ptr.next;
	}

	ptr.next = ptr.next.next;
	this.length--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

MyLinkedList.prototype.print = function() {
	let head = this.head;
	// console.log('{');
	process.stdout.write('{ ');
	while (head) {
		// console.log(head.val);
		process.stdout.write(head.val + ' ');
		head = head.next;
	}
	console.log('}');
 }

var obj = new MyLinkedList();

const actions = ["MyLinkedList","addAtHead","addAtIndex","addAtTail","addAtHead","addAtIndex","addAtTail","addAtTail","addAtIndex","deleteAtIndex","deleteAtIndex","addAtTail"];
const params = [[],[0],[1,4],[8],[5],[4,3],[0],[5],[6,3],[7],[5],[4]];

for (let i = 1; i < actions.length; i++) {
	console.log(`${actions[i]}(${params[i]})`);
	console.log(obj[actions[i]](...params[i]));
	obj.print();
}

