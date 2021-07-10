function ex_objects() {
	// obj = new Object();
	// obj.value = 42;
	obj = {
		value: 42
	};
	obj.next = null;
	console.log('obj :', obj);

	obj.toString = function() {
		return this.value;
	}

	console.log('obj.toString :', obj.toString);
	console.log('obj.toString() :', obj.toString());

	book = {
		title: 'JavaScript',
		edition: 7
	};
	console.log('book :', book);
	console.log('book.title :', book.title);
	console.log("book['edition'] :", book['edition']);
	book.contents = {}
	console.log('book.contents :', book.contents);
	console.log('book.contents.ch1 :', book.contents.ch1);
	// console.log('book.contents.ch1.sect1 :', book.contents.ch1?.sect1);

	for (let key in book) {
		console.log(key, ':', book[key])
	}

	console.log(book.hasOwnProperty('title'));
	console.log('title' in book);

	// object's values is not iterable
	// for (let value of book) {
	// 	console.log(value)
	// }

}

ex_objects();
