const name = '[controller]';
console.log(name);

const service = require('./service');

async function f1() {
	console.log(name, 'f1', 'start');
	const result = service.f1();
	throw new Error('abc');
	console.log(name, 'result:', result);
	console.log(name, 'f1', 'end');
	return result;
}

exports.f1 = f1;
