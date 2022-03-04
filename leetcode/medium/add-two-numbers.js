const process = require('process');

// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	let ptr = new ListNode();
	let overflow = 0;

	let cur = ptr;
	while (l1 && l2) {
		cur.next = new ListNode();
		let sum = l1.val + l2.val + overflow;
		overflow = 0;
		if (sum > 9) {
			sum = sum - 10;
			overflow = 1;
		}
		cur.next.val = sum;
		cur = cur.next;
		l1 = l1.next;
		l2 = l2.next;
	}

	while (l1) {
		cur.next = new ListNode();
		let sum = l1.val + overflow;
		overflow = 0;
		if (sum > 9) {
			sum = sum - 10;
			overflow = 1;
		}
		cur.next.val = sum;
		cur = cur.next;
		l1 = l1.next;
	}

	while (l2) {
		cur.next = new ListNode();
		let sum = l2.val + overflow;
		overflow = 0;
		if (sum > 9) {
			sum = sum - 10;
			overflow = 1;
		}
		cur.next.val = sum;
		cur = cur.next;
		l2 = l2.next;
	}

	while (overflow) {
		cur.next = new ListNode();
		let sum = overflow;
		overflow = 0;
		cur.next.val = sum;
		cur = cur.next;
	}

	return ptr.next;
};

var addTwoNumbers_v2 = function(l1, l2) {
	let ptr = new ListNode();
	let overflow = 0;
	let cur = ptr;

	while (l1 || l2 || overflow) {
		let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + overflow;
		[sum, overflow] = [sum % 10, (sum / 10 | 0)];
		cur.next = new ListNode(sum);
		cur = cur.next;
		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
	}

	return ptr.next;
};

var print = function(head) {
	process.stdout.write('{ ');
	while (head) {
		// console.log(head.val);
		process.stdout.write(head.val + ' ');
		head = head.next;
	}
	console.log('}');
}


// const nodeA1 = new ListNode(2);
// const nodeA2 = new ListNode(4);
// const nodeA3 = new ListNode(3);

// const nodeB1 = new ListNode(5);
// const nodeB2 = new ListNode(6);
// const nodeB3 = new ListNode(9);

// nodeA1.next = nodeA2;
// nodeA2.next = nodeA3;
// nodeA3.next = null;

// nodeB1.next = nodeB2;
// nodeB2.next = nodeB3;
// nodeB3.next = null;


// const nodeA1 = new ListNode(0);
// const nodeB1 = new ListNode(0);

const nodeA1 = new ListNode(9);
const nodeA2 = new ListNode(9);
const nodeA3 = new ListNode(9);

const nodeB1 = new ListNode(9);

nodeA1.next = nodeA2;
nodeA2.next = nodeA3;
nodeA3.next = null;


// console.log(node1);
console.log(print(addTwoNumbers_v2(nodeA1, nodeB1)));
// console.log(node1);

