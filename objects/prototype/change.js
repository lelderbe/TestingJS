function ex01() {
	console.log('\n------------ Task: Добавить функциям метод "f.defer(ms)" ---------------');
	function f() {
		console.log("Hello!");
	}

	Function.prototype.defer = function(ms) {
		setTimeout(this, ms);
	}

	f.defer(1000); // выведет "Hello!" через 1 секунду
}

// ex01();

function ex02() {
	console.log('\n------------ Task: Добавьте функциям декорирующий метод "defer()" ---------------');

	Function.prototype.defer = function(ms) {
		let f = this;
		return function(...args) {
			setTimeout(() => f.apply(this, args), ms);
		}
	}

	function f(a, b) {
		console.log( a + b );
	}

	f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
}

ex02();
