const fs = require("fs/promises");

function readFile() {
	console.log('[readFile] started');

	fs.readFile("/dev/random").then((data) => {
		// process the file text given with data
		console.log('file read');
	}).catch((err) => {
		// handle the error
		console.error(err);
	});

	console.log('[readFile] ended');
}

console.log('[main] 1');

readFile();

console.log('[main] 2');
