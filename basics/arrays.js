function ex_arrays_1() {
	console.log('\n-------------- array -----------------');
	var arr = [
		[1, 2, 3],
		[4, 5, 6],
	]

	console.log('arr = ', arr);
	console.log('arr.length :', arr.length);
	console.log('arr[0] :', arr[0]);
	console.log('arr[1][1] :', arr[1][1]);
	arr[4] = [1, 2];
	console.log('arr = ', arr);

	arr.push([3, 3, 3]);
	console.log('arr = ', arr);

	var a = 11;
	console.log(a);
	console.log(this);

	for (let x of arr) {
		console.log(x);
	}

	arr2 = [11, 21, 33];
	console.log('arr2:', arr2);
	console.log('forEach:')
	arr2.forEach(console.log);

	let arr3 = [44, ...arr2];
	console.log('arr3:', arr3);

	let [first, ...rest] = 'Hello';
	console.log('first:', first, 'rest:', rest);
}

ex_arrays_1();

// console.log(this);
// console.log(a);

function ex_arrays_2() {
	function sum_by_index(array) {
		let sum = 0;
		for (let i in array) {
			sum += array[i];
		}
		return (sum);
	}

	function sum_by_element(array) {
		let sum = 0;
		for (let x of array) {
			sum += x;
		}
		return (sum);
	}

	console.log(sum_by_index([1, 2, 3, 4]));
	console.log(sum_by_element([1, 2, 3, 4]));
}

// ex_arrays_2();

