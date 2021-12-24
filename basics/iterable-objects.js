function ex00() {
	console.log('\n---------------- Iterable objects -----------------');
	let range = {
		from: 1,
		to: 5,

		[Symbol.iterator]() {
			return {
				current: this.from,
				last: this.to,

				next() {
					if (this.current <= this.last) {
						return { done: false, value: this.current++ };
					} else {
						return { done: true };
					}
				}
			}
		}
	}

	for (const item of range) {
		console.log(item);
	}

	const iterator = range[Symbol.iterator]();
	console.log(iterator);
	console.log(iterator.next());

	console.log('\n---------------- via Constructor -----------------');
	{
		function Range(from, to) {
			this.from = from;
			this.to = to;

			this[Symbol.iterator] = function() {
				return {
					current: this.from,
					end: this.to,

					next() {
						if (this.current < this.end) {
							return { done: false, value: this.current++ };
						} else {
							return { done: true };
						}
					}
				}
			}
		}

		for (const x of new Range(11, 15)) {
			console.log(x);
		}
	}

}

// ex00(); // Создание итератора

function ex01() {
	console.log('\n---------------- Строка – перебираемый объект -----------------');
	for (const char of 'abcdef') {
		console.log(char);
	}
}

// ex01();	// Строка – перебираемый объект

function ex02() {
	console.log('\n---------------- Псевдомассивы -----------------');
	const a = {
		0: 'A',
		1: 'B',
		length: 2,
	}

	console.log(a);

	const b = Array.from(a);
	b.push('Z');
	console.log(b, b.length);
}

ex02();	// Псевдомассивы
