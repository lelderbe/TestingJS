function printList_recursion(list) {
	if (list) {
		console.log(list.value);
		printList_recursion(list.next);
	}
}

function printList_reverse_recursion(list) {
	if (list) {
		printList_reverse_recursion(list.next);
		console.log(list.value);
	}
}

function printList_iter(list) {
	while (list) {
		console.log(list.value);
		list = list.next;
	}
}

function printList_reverse_iter(list) {
	const values = [];
	while (list) {
		values.push(list.value);
		list = list.next;
	}
	values.reverse().forEach((value) => console.log(value));
}

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

console.time();
printList_recursion(list);
printList_iter(list);
console.timeEnd();

printList_reverse_recursion(list);
printList_reverse_iter(list);
