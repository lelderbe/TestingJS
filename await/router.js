const name = '[router]';
console.log(name);

const controller = require('./controller');

async function f1() {
	console.log(name, 'f1', 'start');
	try {
		console.log(name, 'before controller.f1()');
		const result = await controller.f1();
		console.log(name, 'result:', result);
		console.log(name, 'after controller.f1()');
	} catch (err) {
		console.log('err:', err.message);
	}

	console.log(name, 'f1', 'end');
}

f1();

console.log(name, 'end of module reached');
