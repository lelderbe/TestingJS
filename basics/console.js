const readline = require('readline');

function ex01() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: 'OHAI> '
	});

	rl.prompt();

	rl.on('line', (line) => {
		switch (line.trim()) {
			case 'hello':
			console.log('world!');
			break;
			default:
			console.log(`Say what? I might have heard '${line.trim()}'`);
			break;
		}
		rl.prompt();
	}).on('close', () => {
		console.log('Have a great day!');
		process.exit(0);
	});
}

// ex01();

function ex02() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl.question('What do you think of Node.js? ', (answer) => {
		// TODO: Log the answer in a database
		console.log(`Thank you for your valuable feedback: ${answer}`);

		rl.close();
		return answer;
	});

	console.log('got: ');
}

// ex02();

function ex03() {
	const x = 1
	const y = 2
	const z = 3

	console.count(
		'The value of x is ' + x + 
		' and has been checked .. how many times?'
	)
	console.count(
		'The value of x is ' + x + 
		' and has been checked .. how many times?'
	)
	console.count(
		'The value of y is ' + y + 
		' and has been checked .. how many times?'
	);

	const oranges = ['orange', 'orange'];
	const apples = ['just one apple'];
	oranges.forEach(fruit => {
		console.count(fruit);
	});
	apples.forEach(fruit => {
		console.count(fruit);
	});

	const function2 = () => console.trace();
	const function1 = () => function2();
	function1();

}

ex03();
