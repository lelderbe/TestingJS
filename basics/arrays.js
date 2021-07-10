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
}

ex_arrays_1();

// console.log(this);
// console.log(a);

function ex_arrays_2() {
	function sum(array) {
		let sum = 0;
		// for (let i in array) {
		// 	sum += array[i];
		// }
		for (let x of array) {
			sum += x;
		}
		return (sum);
	}

	console.log(sum([1, 2, 3, 4]));
}

// ex_arrays_2();

