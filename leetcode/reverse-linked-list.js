// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	let ptr = head;
	while (ptr && ptr.next) {
		const next = ptr.next.next;
		ptr.next.next = head;
		head = ptr.next;
		ptr.next = next;
	}

	return head;
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
console.log(reverseList(node1));
console.log(node1);
console.log(node4);
