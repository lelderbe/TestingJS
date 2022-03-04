// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	let length = 0;

	// calculate length - need to find center
	let cur = head;
	while (cur) {
		length++;
		cur = cur.next;
	}

	// move to the center and reverse left part of list
	cur = head;
	let prev = null;
	for (let i = 0; i < (length / 2 | 0); i++) {
		let next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
	}

	let left = prev;
	prev = cur;
	let right = cur;

	// move right one step if length is odd
	if (length % 2 != 0) {
		right = right.next;
	}

	// compare left part and riht part
	let result = true;
	for (let i = 0; i < (length / 2 | 0); i++) {
		result = result && (left.val == right.val);

		// and restore left part elements order
		let next = left.next;
		left.next = prev;
		prev = left;
		left = next;

		right = right.next;
	}

	return result;
};

var isPalindrome_v2 = function(head) {
	let left = head;
	let right = head;

	// find center and reverse left part
	let prev = null;
	while (right?.next && right.next?.next) {
		right = right.next.next;
		// left = left.next;

		let next = left.next;
		left.next = prev;
		prev = left;
		left = next;
	}

	// correction
	let last = right?.next;
	right = left.next;
	if (last) {
		left.next = prev;
		prev = right;
	} else {
		let next = left;
		left = prev;
		prev = next;
	}

	// compare left part and right part
	let result = true;
	while (left && right) {
		result = result && (left.val == right.val);

		// and restore left part elements order
		let next = left.next;
		left.next = prev;
		prev = left;
		left = next;

		right = right.next;
	}

	return result;
};

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(2);
const node5 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
// node4.next = node5;
node4.next = null;
node5.next = null;

// console.log(node1);
console.log(isPalindrome_v2(node1));
// console.log(node1);

