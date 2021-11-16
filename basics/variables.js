'use strict';
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

// ex_vars_2();

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

// ex_vars_3();

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

// ex_vars_4();

function ex_vars_5() {
	console.log('\n------------- auto-convert cases ----------------');
	console.log('"" + 1 + 0:', "" + 1 + 0);
	console.log('"" - 1 + 0:', "" - 1 + 0);
	console.log('true + false:', true + false);
	console.log('6 / "3":', 6 / "3");
	console.log('"2" * "3":', "2" * "3");
	console.log('4 + 5 + "px":', 4 + 5 + "px");
	console.log('"$" + 4 + 5:', "$" + 4 + 5);
	console.log('"4" - 2:', "4" - 2);
	console.log('"4px" - 2:', "4px" - 2);
	console.log('7 / 0:', 7 / 0);
	console.log('"  -9  " + 5:', "  -9  " + 5);
	console.log('"  -9  " - 5:', "  -9  " - 5);
	console.log('null + 1:', null + 1);
	console.log('undefined + 1:', undefined + 1);
	console.log('" \\t \\n" - 2:', " \t \n" - 2);
}

// ex_vars_5();

/**
 * string to number
 */
function ex06() {
    let a = '1';
    let b = '2';
    console.log(`a: "${a}", b: "${b}"`);
    console.log('a + b:', a + b);
    console.log('+a + +b:', +a + +b);
}

// ex06();

/**
 * ||, &&, ??
 */
function ex07() {
	console.log('\n--------------- || -------------------');
    console.log('1 || 0:', 1 || 0); // 1
    console.log("true || 'no matter what':", true || 'no matter what'); // true

    console.log('null || 1:', null || 1); // 1 (первое истинное значение)
    console.log('null || 0 || 1:', null || 0 || 1); // 1 (первое истинное значение)
    console.log('undefined || null || 0:', undefined || null || 0); // 0 (поскольку все ложно, возвращается последнее значение)

    let currentUser = null;
    let defaultUser = "John";

    let name = currentUser || defaultUser || "unnamed";

    console.log(name); // выбирается "John" – первое истинное значение

	console.log('\n--------------- && -------------------');
    // Если первый операнд истинный,
    // И возвращает второй:
    console.log('1 && 0:', 1 && 0); // 0
    console.log('1 && 5:', 1 && 5); // 5

    // Если первый операнд ложный,
    // И возвращает его. Второй операнд игнорируется
    console.log('null && 5:', null && 5); // null
    console.log('0 && "no matter what":', 0 && "no matter what"); // 0
    console.log('1 && 2 && null && 3:', 1 && 2 && null && 3); // null
    console.log('1 && 2 && 3:', 1 && 2 && 3); // 3

	console.log('\n--------------- ?? -------------------');
	console.log('undefined ?? null:', undefined ?? null);
	console.log('null ?? undefined:', null ?? undefined);
	console.log('null ?? undefined ?? 5:', null ?? undefined ?? 5);
	console.log('undefined || null || 0 || 100:', undefined || null || 0 || 100);
	console.log('undefined ?? null ?? 0 ?? 100:', undefined ?? null ?? 0 ?? 100);

	let height = 0;
	console.log('height || 100:', height || 100); // 100
	console.log('height ?? 100:', height ?? 100); // 0

	// let x = 1 && 2 ?? 3;	// Синтаксическая ошибка
	let x = (1 && 2) ?? 3;	// Всё хорошо

	// let a;
	// console.log('a:', a);
	// a ??= 1;
	// console.log('a:', a);
	// a ??= 2;
	// console.log('a:', a);
}

// ex07();

function ex08() {
	console.log('\n------------- loops ------------------');
	for (let i = 2; i <=10; i++) {
		if (i % 2 == 0) {
			console.log(i);
		}
	}

	let i = 0;
	while (i < 3) {
		console.log(`number ${i}!`);
		i++;
	}
}

// ex08();

/**
 * find prime numbers
 */
function ex09() {
	console.log('\n--------- find prime numbers -----------');
	let n = 100;
	if (!n) {
		return;
	}
outer:
	for (let i = 2; i <= n; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j == 0) {
				continue outer;
			}
		}
		console.log(i);
	}
}

// ex09();

/**
 * switch
 * @param arg
 */
function ex10(arg) {
	switch (arg) {
		case '0':
		case 1:
			console.log('0 as string, 1 as number');
			break;
		case '2':
			console.log('2 as string');
			break;
		case 3:
			console.log('3 as number');
			break;
		default:
			console.log('default');
	}
}

// ex10('0');
// ex10(1);
// ex10('2');
// ex10('3');

function ex11() {
	console.log('\n------------ functions ---------------');
	let trigger = false;
	// function f1(text = 'default text') {
	function f1(text = getDefaultText()) {
		console.log('f1:', text);
	}

	function getDefaultText() {
		trigger = true;
		return 'default text';
	}

	console.log('trigger:', trigger);
	console.log(f1);
	console.log(f1());
	console.log(f1('Hello'));
	console.log('trigger:', trigger);

	console.log('\n-------------- returns -----------------');
	function checkAge(age) {
		if (age > 18) {
			return true;
		} else {
			return console.log('Родители разрешили?');
		}
	}

	function checkAge2(age) {
		return (age > 18) ? true : console.log('Родители разрешили?');
	}

	function checkAge3(age) {
		return (age > 18) || console.log('Родители разрешили?');
	}
	console.log(checkAge(10));
	console.log(checkAge2(10));
	console.log(checkAge3(10));

	console.log(checkAge(18));
	console.log(checkAge2(18));
	console.log(checkAge3(18));

	console.log(checkAge(19));
	console.log(checkAge2(19));
	console.log(checkAge3(19));

	console.log('\n------------ min(a, b) ---------------');
	function min(a, b) {
		return (a < b) ? a : b;
	}
	console.log(min(2, 5));
	console.log(min(3, -1));
	console.log(min(1, 1));

	console.log('\n------------ pow(x, n) ---------------');
	function pow(x, n) {
		return x**n;
	}
	console.log(pow(3, 2));
	console.log(pow(3, 3));
	console.log(pow(1, 100));
	console.log(pow(9, 0.5));
	console.log(pow(4, 1.5));
}

// ex11();

function ex12() {
	console.log('\n------------ function declaration ---------------');
	function f1() {	// function declaration
		console.log('Hi');
	}

	f1();
	console.log(f1);
	let f2 = f1;
	f2();

	console.log('\n------------ function expression ---------------');
	let f3 = function() {
		console.log('Hi from f3');
	};

	console.log(f3);
	f3();
	let f4 = f3;
	f4();

	console.log('\n------------ callbacks functions ---------------');
	function ask(question, yes, no) {
		if (question) {
			yes();
		} else {
			no();
		}
	}

	function f_yes() {
		console.log('YES!');
	}

	ask(true, function(){ console.log('yes');}, function(){ console.log('no way!');});
	ask(false, function(){ console.log('yes');}, function(){ console.log('no way!');});
	ask(true, f_yes, function(){ console.log('no way!');});
}

// ex12();

function ex13() {
	console.log('\n-------------- arrow functions ---------------');
	function sum1(a, b) {
		return a + b;
	}
	let sum2 = function(a, b) { return a + b; };
	let sum3 = (a, b) => a + b;

	console.log(sum1(2, 3));
	console.log(sum2(2, 3));
	console.log(sum3(2, 3));

	let double = n => n * 2;
	console.log(double(5));

	let hello = () => 'Hello';
	console.log(hello());

	let sum = (a, b) => {
		let result = a + b;
		return result;
	};
	console.log(sum(1, 2));

	let f1 = (a1, a2, ...args) => console.log(args);
	f1(1, 2, 3, 4, 5);

	let str = `first line
	second line
	and third line`;
	console.log(str);
}

ex13();
