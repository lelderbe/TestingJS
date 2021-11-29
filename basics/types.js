function ex01() {
	console.log('\n---------- Primitives like Objects -----------');
	const str = 'hello';
	console.log('str.toUpperCase():', str.toUpperCase());
	const n = 1.23456;
	console.log('n.toFixed(2):', n.toFixed(2));

	console.log('\n------------------ Numbers ------------------');
	{
		const n = 213;
		console.log('decimal:', n.toString());
		console.log('binary:', n.toString(2));
		console.log('hex:', n.toString(16));

		console.log(0x10d72978a9374444ae94b72a051a83cf.toString(36));
		console.log(123142355..toString(36));
	}

	console.log('\n------------------ round ------------------');
	{
		const value = 1.366;
		console.log('value:', value);
		console.log('Math.floor(value):', Math.floor(value));
		console.log('Math.ceil(value):', Math.ceil(value));
		console.log('Math.round(value):', Math.round(value));
		console.log('+value.toFixed(2):', +value.toFixed(2));
		console.log('+value.toFixed(1):', +value.toFixed(1));
		console.log('+value.toFixed(0):', +value.toFixed(0));
	}

	console.log('\n------------------ precision ------------------');
	{
		console.log('0.1 + 0.2:', 0.1 + 0.2);
		console.log('(0.1 + 0.2).toFixed(2):', (0.1 + 0.2).toFixed(2));
	}

	console.log('\n------------------ compare ------------------');
	{
		console.log('isNaN(NaN):', isNaN(NaN));
		console.log("isNaN('str'):", isNaN('str'));

		console.log();
		console.log('isFinite(5):', isFinite(5), 5);
		console.log('isFinite(Infinity):', isFinite(Infinity), Infinity);
		console.log('isFinite(-5 / 0):', isFinite(-5 / 0), -5 / 0);

		console.log();
		let str = 'abc'; console.log(`isFinite('${str}'):`, isFinite(str));
		str = '';		console.log(`isFinite('${str}'):`, isFinite(str));
		str = 'abc5';	console.log(`isFinite('${str}'):`, isFinite(str));
		str = '4abc5';	console.log(`isFinite('${str}'):`, isFinite(str));
		str = '45';		console.log(`isFinite('${str}'):`, isFinite(str));

		console.log();
		console.log('Object.is(NaN, NaN):', Object.is(NaN, NaN));
		console.log('Object.is(0, -0):', Object.is(0, -0));
		console.log('Object.is({}, {})', Object.is({}, {}));
	}

	console.log('\n------------------ parseInt и parseFloat ------------------');
	{
		console.log("+'100':", +'100');
		console.log("+'100px':", +'100px');
		console.log("Number('100'):", Number('100'));
		console.log("Number('100px'):", Number('100px'));
		console.log("parseInt('100px'):", parseInt('100px'));
		console.log("parseInt('10d0px'):", parseInt('10d0px'));
		console.log("parseInt('d100px'):", parseInt('d100px'));
		console.log("parseFloat('1.24d5'):", parseFloat('1.24d5'));
		console.log("parseInt('1010101', 2):", parseInt('1010101', 2));

		console.log();
		const str = '01011010 00110001 00110000 01001110 01111011 01100001 01110100 01100001 01100100 01100001 01110100 00110011 01101101 01011111 01100110 00110001 01111000 00110011 01011111 01110100 00110011 01110010 01100011 00110011 01110011 01011111 01110100 01110011 00110000 01101101 01011111 00110011 01101000 01110100 01111101';
		console.log(str,
			str.split(' ')
				.map(binary => parseInt(binary, 2))
				.map(value => String.fromCharCode(value))
				.join('')
		)
	}

	console.log('\n------------------ Math ------------------');
	{
		console.log('Math.random():', Math.random());
		console.log('Math.random():', Math.random());
		console.log('Math.random():', Math.random());
		console.log('Math.min(4, 5, 2, 7):', Math.min(4, 5, 2, 7));
		console.log('Math.pow(2, 10):', Math.pow(2, 10));
		console.log('2**10:', 2**10);
	}
}

// ex01();

function ex02() {
	{
		const a = '3.1';
		const b = '5.1';
		console.log(parseInt(a) + parseInt(b));
		console.log(parseFloat(a) + parseFloat(b));
	}

	{
		console.log(1.35.toFixed(1)); // 1.4
		console.log(6.35.toFixed(1)); // 6.3

		console.log(1.35.toFixed(20));
		console.log(6.35.toFixed(20));
	}
}

// ex02();

function ex03() {
	console.log('\n------------------ Strings ------------------');
	console.log("'abc'.length:", 'abc'.length);
	console.log("'abc'[0]:", 'abc'[0]);
	console.log("'abc'.charAt(0):", 'abc'.charAt(0));
	console.log("'abc'.toUpperCase():", 'abc'.toUpperCase());
	console.log("'abc'.includes('c'):", 'abc'.includes('c'));
	console.log("'house'.slice(-2, -1):", 'house'.slice(-2, -1));
}

// ex03();

function ex04() {
	{
		function uCase(str) {
			return str ? str[0].toUpperCase() + str.slice(1) : str;
		}

		console.log(uCase('abc'));
		console.log(uCase('aBC'));
		console.log(uCase('Abc'));
		console.log(uCase('d'));
		console.log(uCase(''));
	}

	{
		function checkSpam(str) {
			const s = str.toLowerCase();
			return s.includes('viagra') || s.includes('xxx');
		}

		console.log(checkSpam('buy ViAgRA now'));
		console.log(checkSpam('free xxxxx'));
		console.log(checkSpam("innocent rabbit"));
	}

	{
		function truncate(str, maxlength) {
			if (maxlength == 0)
				return '';
			if (str.length > maxlength) {
				return str.slice(0, maxlength - 1) + '…';
			}
			return str;
		}

		console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
		console.log(truncate('Всем привет!', 20));
		console.log(truncate('Всем привет!', 0));
		console.log(truncate('Всем привет!', 1));
	}

	{
		function extractCurrencyValue(str) {
			// return parseInt(str.slice(1));
			return +str.slice(1);
		}

		console.log(extractCurrencyValue('$120') === 120); // true
	}
}

ex04();
