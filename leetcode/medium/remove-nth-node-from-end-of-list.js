// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	let ptr = new ListNode(0, head);
	let slow = ptr;
	let fast = head;

	while (n--) {
		fast = fast.next;
	}

	while (fast) {
		slow = slow.next;
		fast = fast.next;
	}

	slow.next = slow.next.next;

	return ptr.next;
};

const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;

console.log(node1);
console.log(removeNthFromEnd(node1, 2));
console.log(node1);
