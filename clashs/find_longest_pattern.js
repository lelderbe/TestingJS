s = '103320040000';

function ex00() {
	let max = 0;
	let count = 0;
	for (c of s) {
		count = c == '0' ? count + 1 : 0;
		max = max < count ? count : max;
	}
	console.log(max);
}

ex00();

function ex01() {
	let i = 1;
	while (s.indexOf('0'.repeat(i)) != -1) {
		i++;
	}
	console.log(i - 1);
}

ex01();

function ex02() {
	console.log(Math.max(...s.split(/[^0]/).map(e=>e.length)));
}

ex02();
