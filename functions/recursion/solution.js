function ex01() {
	console.log('\n-------------- Вычислить сумму чисел до данного ---------------');
	console.log('\n-------------- iterate ---------------');
	{
		function sumTo(n) {
			let result = 0;
			for (let i = 1; i <= n; i++) {
				result += i;
			}
			return result;
		}

		console.log(sumTo(1)); // = 1
		console.log(sumTo(10)); // = 55
		console.log(sumTo(100)); // = 5050
	}

	console.log('\n-------------- recursion ---------------');
	{
		function sumTo(n) {
			if (n == 1) {
				return 1;
			}
			return n + sumTo(n - 1);
		}

		console.log(sumTo(1)); // = 1
		console.log(sumTo(10)); // = 55
		console.log(sumTo(100)); // = 5050
	}

	console.log('\n-------------- math ---------------');
	{
		function sumTo(n) {
			return n * (n + 1) / 2;
		}

		console.log(sumTo(1)); // = 1
		console.log(sumTo(10)); // = 55
		console.log(sumTo(100)); // = 5050
	}

}

ex01();
