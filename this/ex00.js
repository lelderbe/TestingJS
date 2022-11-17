function f1() {
	function f2() {
		console.log('1', this);
	}
	console.log('2', this);
	f2();
}

console.log('3', this);
f1();
