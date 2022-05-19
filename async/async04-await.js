const fs = require("fs/promises");

async function readFile() {
	console.log('[readFile] started');

	try {
		await fs.readFile("/dev/random");
	} catch (err) {
		// handle the error
		console.error(err);
	}
	// process the file text given with data
	console.log('file read');

	console.log('[readFile] ended');
}

console.log('[main] 1');

readFile();

console.log('[main] 2');
