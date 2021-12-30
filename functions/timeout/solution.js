function ex01() {
	function f1() {
		console.log('f1');
	}

	let id = setTimeout(f1, 1000);
	f1();
	setTimeout((value) => console.log(value), 500, 'abcde');
	clearTimeout(id);
	setTimeout(() => { console.log('AAA'); }, 200);

	id = setInterval(f1, 500);
	setTimeout(() => clearInterval(id), 5000);
}

// ex01();

function ex02() {
	console.log('\n------------ start Timeout AFTER main thread ---------------');
	console.log('starting...');
	setTimeout(() => console.log('from Timeout 100'), 100);
	setTimeout(() => console.log('from Timeout 0'), 0);
	console.log('not yet');
	console.log('not yet');
	console.log('not yet');
	console.log('not yet');
	console.log('still not yet');
	console.log('finished');
}

ex02();

