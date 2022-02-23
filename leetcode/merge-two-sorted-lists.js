function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
	const result = { next: null };
	let tail = result;
	while (list1 && list2) {
		if (list1.val < list2.val) {
			tail.next = list1;
			list1 = list1.next;
		} else {
			tail.next = list2;
			list2 = list2.next;
		}
		tail = tail.next;
	}
	if (list1) {
		tail.next = list1;
	}
	if (list2) {
		tail.next = list2;
	}
	return result.next;
};


// console.log(mergeTwoLists(new ListNode(5, new ListNode(6)), new ListNode(1, new ListNode(8))));
// console.log(mergeTwoLists(null, null));
console.log(mergeTwoLists(null, new ListNode(0)));
// console.log(mergeTwoLists(new ListNode(-9, new ListNode(3)), new ListNode(5, new ListNode(7))));
