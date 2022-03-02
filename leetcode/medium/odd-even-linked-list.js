// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
	let odd = head;
	let even = head;
	let curr = head?.next;

	for (let isEven = true; curr; isEven = !isEven, curr = even.next) {
		if (isEven) {
			even = curr;
		} else {
			even.next = curr.next;
			curr.next = odd.next;
			odd.next = curr;
			odd = curr;
		}
	}

	return head;
};

// Etalon solution
var oddEvenList_v2 = function(head) {
	if (head == null) return null;

	let odd = head;
	let even = head.next;
	const evenHead = even;

	while (even?.next) {
		odd.next = even.next;
		odd = odd.next;
		even.next = odd.next;
		even = even.next;
	}

	odd.next = evenHead;

	return head;
};

// const node1 = new ListNode(3);
// const node2 = new ListNode(2);
// const node3 = new ListNode(0);
// const node4 = new ListNode(-4);

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;

// console.log(node1);
console.log(oddEvenList_v2(node1));
// console.log(node1);
