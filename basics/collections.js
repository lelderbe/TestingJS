function ex00() {
	console.log('\n---------------- Map -----------------');
	{
		const map = new Map();
		map.set(0, 'zero');
		map.set(10, 'ten');
		map.set('10', 10);

		console.log(map);
		console.log('map.size:', map.size);
		console.log('map.get(0):', map.get(0));
		console.log('map.get(2):', map.get(2));
		console.log('map.keys():', map.keys());
		console.log('map.values():', map.values());
		console.log('map.entries():', map.entries());

		console.log('\n---------- for (const e of map.entries()) ---------');
		// for (const e of map.entries()) {
		for (const e of map) {
			console.log(e[0], '=>', e[1]);
		}

		console.log('\n------- for (const [key, value] of map.entries()) -------');
		for (const [key, value] of map.entries()) {
			console.log(key, ':', value);
		}

		console.log('\n----------- Object.entries() .fromEntries() -----------');
		const obj = {
			a: 'A',
			b: 'B',
			5: 555,
		};

		console.log(Object.entries(obj));
		const map2 = new Map(Object.entries(obj));
		console.log(map2);
		console.log(Object.fromEntries(map2));

	}

	console.log('\n---------------- Set -----------------');
	{
		const set = new Set();
		set.add(1);
		set.add('A');
		set.add(1);

		console.log(set);
		console.log('set.size:', set.size);
		console.log('set.has(1):', set.has(1));
		console.log('set.has(2):', set.has(2));
	}
}

// ex00();

function ex01() {
	console.log('\n---------------- Задачи -----------------');
	console.log('\n--- Фильтрация уникальных элементов массива ---');
	{
		function unique(arr) {
			return Array.from(new Set(arr));
		}

		let values = ["Hare", "Krishna", "Hare", "Krishna",
			"Krishna", "Krishna", "Hare", "Hare", ":-O"
		];

		console.log(unique(values)); // Hare,Krishna,:-O
	}

	console.log('\n--- Отфильтруйте анаграммы ---');
	{
		function aclean(arr) {
			const map = new Map();

			for (let word of arr) {
				const key = word.toLowerCase().split('').sort().join('');
				if (!map.has(key)) {
					map.set(key, word);
				}
				// if (!map.has(key)) {
				// 	map.set(key, []);
				// }
				// map.get(key).push(word);
			}
			// console.log(map);
			return Array.from(map.values());
		}

		let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
		console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
	}
}

ex01();
