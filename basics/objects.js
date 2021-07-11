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

	for (const [key, value] of Object.entries(book)) {
		console.log('key:', key, "value:", value);
	}

	// деструктурирующее присванивание
	let color = {
		r: 0.0,
		g: 0.5,
		b: 0.9,
		a: 1.0,
	}

	const {r, g, b} = color;
	console.log('r:', r, 'g:', g, 'b:', b);

	// условный доступ к свойствам
	console.log('color.g:', color.g);
	console.log('color.f:', color.f);
	color = null;
	console.log('color?.f?.g:', color?.f?.g);


}

ex_objects();

