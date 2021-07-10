function ex_vars_1() {
	console.log('\n------------- variables --------------');
	let a = 1200 / 40;
	let b = 1200 / 40.2;
	let c = 5;
	let d = false;
	let s = '3';
	
	console.log('a = 1200 / 40 :', a, ',', typeof(a));
	console.log('b = 1200 / 40.2 :', b, ',', typeof(b));
	console.log('parseInt(b) :', parseInt(b), ',', typeof(b));
	console.log('c = 5 :', c, ',', typeof(c));
	console.log('d = false :', d, ',', typeof(d));
	console.log("s = '3' :", s, ',', typeof(s));

	console.log('\n------- types & conversations --------');
	console.log('a :', a, ',', typeof(a));				// number
	console.log("a + '' :", a + '', ',', typeof(a + ''));	// string
	console.log('s :', s, ',', typeof(s));				// string
	console.log('+s :', +s, ',', typeof(+s));			// number
	console.log('s - 0 :', s - 0, ',', typeof(s - 0));		// number
	console.log('!!s :', s, ',', typeof(!!s));			// boolean

	console.log("'2' + '5':", '2' + '5');              // 25
	console.log("'2' * '5':", '2' * '5');              // 10

	console.log('typeof("string") :', typeof("string"));
	console.log('typeof(new String("string")) :', typeof(new String("string")));

	console.log('\n------------ ++ and -- ---------------');
	let i;
	i = 10; console.log('i:', i, '\t', '++i:', ++i, '\t', 'i:', i);
	i = 10; console.log('i:', i, '\t', 'i++:', i++, '\t', 'i:', i);

	console.log('\n-------------- Date() ----------------');
	console.log('(new Date()).toLocaleString() :', (new Date()).toLocaleString());
}

// ex_vars_1();

function ex_vars_2() {
	console.log(a);

	// let a;
	var a = 5;
	console.log(a);
	// console.log(b);

	{
		console.log(a);
		b = 3;
		console.log(b);
	}

	// b = 4;
	console.log(b);

}

// ex_vars_2();

function ex_vars_3() {
	let x = 3;
	let y = '3';
	// let y = 3;
	console.log('x :', x, 'y :', y, 'x == y :', x == y);
	console.log('x :', x, 'y :', y, 'x === y :', x === y);
}

ex_vars_3();
