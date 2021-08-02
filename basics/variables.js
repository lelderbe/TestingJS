'use strict'
// a = 5;				// ReferenceError

function ex_vars_1() {
	console.log('\n------------- variables --------------');
	let a = 1200 / 41;
	let b = 1200 / 40.2;
	let c = 5;
	let d = false;
	let s = '3';
	let billion = 1_000_000_000;
	let bytes = 0x89_AB_CD_EF;
	let bits = 0b0001_1101_0111;
	let octal = 0o77;
	
	console.log('a = 1200 / 40 :', a, ',', typeof(a));
	console.log('b = 1200 / 40.2 :', b, ',', typeof(b));
	console.log('parseInt(b) :', parseInt(b), ',', typeof(b));
	console.log('c = 5 :', c, ',', typeof(c));
	console.log('d = false :', d, ',', typeof(d));
	console.log("s = '3' :", s, ',', typeof(s));
	console.log(`billion: ${billion}, bytes: ${bytes}, bits: ${bits}, octal: ${octal}`);

	console.log('\n------- types & conversations --------');
	console.log('a :', a, ',', typeof(a));				// number
	console.log("a + '' :", a + '', ',', typeof(a + ''));	// string
	console.log('s :', s, ',', typeof(s));				// string
	console.log('+s :', +s, ',', typeof(+s));			// number
	console.log('s - 0 :', s - 0, ',', typeof(s - 0));		// number
	console.log('!!s :', s, ',', typeof(!!s));			// boolean

	console.log("'2' + '5':", '2' + '5');				// 25
	console.log("2 + '5':", 2 + '5');					// 25
	console.log("'2' * '5':", '2' * '5');				// 10
	console.log("2 * '5':", 2 * '5');					// 10
	console.log("'2' * 5:", '2' * 5);					// 10

	console.log('typeof("string") :', typeof("string"));
	console.log('typeof(new String("string")) :', typeof(new String("string")));

	let arr = [1, 2, 3];
	console.log('arr instanceof Array :', arr instanceof Array);
	console.log('arr instanceof Object :', arr instanceof Object);
	console.log('arr instanceof Number :', arr instanceof Number);

	console.log('\n------------ ++ and -- ---------------');
	let i;
	i = 10; console.log('i:', i, '\t', '++i:', ++i, '\t', 'i:', i);
	i = 10; console.log('i:', i, '\t', 'i++:', i++, '\t', 'i:', i);

	console.log('\n-------------- Date() ----------------');
	console.log('(new Date()).toLocaleString() :', (new Date()).toLocaleString());


}

// ex_vars_1();

function ex_vars_2() {
	console.log('\n--------------- TTL ------------------');
	console.log(a);

	// let a;
	var a = 5;
	console.log(a);
	// console.log(b);

	{
		console.log(a);
		let b = 3;
		console.log(b);
	}

	// b = 4;
	// console.log(b);
}

ex_vars_2();

function ex_vars_3() {
	console.log('\n------------- boolean ----------------');
	let x = 3;
	let y = '3';
	// let y = 3;
	console.log('x :', x, 'y :', y, 'x == y :', x == y);
	console.log('x :', x, 'y :', y, 'x === y :', x === y);
	let o = {};
	console.log('o = {} && true :', o && true);
	console.log('undefined == false : ', undefined == false);
	console.log('undefined == null : ', undefined == null);
	// ...
}

ex_vars_3();

function ex_vars_4() {
	console.log('\n--- destructuring assignment [x, y] --');
	function ret_2() {
		return [11, 5, 3];
	}

	let arr = [1, 2, 3];
	let x, y;
	console.log('arr:', arr);
	[x, y] = arr;
	console.log('[x, y] = arr :', 'x:', x, 'y:', y);
	[x, y] = [y, x];
	console.log('[x, y] = [y, x] :', 'x:', x, 'y:', y);
	[x, y] = ret_2();
	console.log('x:', x, 'y:', y);
}

ex_vars_4();