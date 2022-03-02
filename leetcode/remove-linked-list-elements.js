// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// two pointers approach
var removeElements = function(head, val) {
	let ptr = new ListNode(0, head);
	let prev = ptr;
	let cur = head;

	while (cur) {
		if (cur.val == val) {
			prev.next = cur.next;
		} else {
			prev = cur;
		}
		cur = cur.next;
	}

	return ptr.next;
};

// single pointer
var removeElements_v2 = function(head, val) {
	let ptr = new ListNode(0, head);
	let cur = ptr;

	while (cur.next) {
		if (cur.next.val == val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}

	return ptr.next;
};

// const node1 = new ListNode(3);
// const node2 = new ListNode(2);
// const node3 = new ListNode(0);
// const node4 = new ListNode(2);
// const node5 = new ListNode(17);

const node1 = new ListNode(7);
const node2 = new ListNode(7);
const node3 = new ListNode(7);
const node4 = new ListNode(7);
const node5 = new ListNode(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;

console.log(node1);
console.log(removeElements_v2(node1, 7));
console.log(node1);
