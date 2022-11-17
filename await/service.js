const name = '[service]';
console.log(name);

async function f1() {
	console.log(name, 'f1', 'start');
	const result = 'ABC';
	console.log(name, 'f1', 'end');
	return result;
}

exports.f1 = f1;
