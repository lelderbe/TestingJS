// Definition for singly-linked list.
function ListNode(val) {
	this.val = val;
	this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
	let lengthA = 0;
	let lengthB = 0;
	let ptrA = headA;
	let ptrB = headB;

	while (ptrA) {
		lengthA++;
		ptrA = ptrA.next;
	}

	while (ptrB) {
		lengthB++;
		ptrB = ptrB.next;
	}

	ptrA = headA;
	ptrB = headB;

	while (lengthA > lengthB) {
		ptrA = ptrA.next;
		lengthA--;
	}

	while (lengthB > lengthA) {
		ptrB = ptrB.next;
		lengthB--;
	}

	while (ptrA && ptrA != ptrB) {
		ptrA = ptrA.next;
		ptrB = ptrB.next;
	}

	return ptrA;
};

var getIntersectionNode_v2 = function(headA, headB) {
	let ptrA = headA;
	let ptrB = headB;

	while (ptrA != ptrB) {
		ptrA = ptrA ? ptrA.next : headB;
		ptrB = ptrB ? ptrB.next : headA;
	}

	return ptrA;
};


const nodeA1 = new ListNode(3);
const nodeA2 = new ListNode(2);
const nodeA3 = new ListNode(0);
const nodeA4 = new ListNode(-4);

nodeA1.next = nodeA2;
nodeA2.next = nodeA3;
nodeA3.next = nodeA4;
nodeA4.next = null;

const nodeB1 = new ListNode(11);

nodeB1.next = nodeA3;

console.log(getIntersectionNode(nodeA1, nodeB1));
console.log(getIntersectionNode_v2(nodeA1, nodeB1));
console.log(getIntersectionNode_v2(null, nodeB1));
