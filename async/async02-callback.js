const fs = require("fs");

function readFile() {
	console.log('[readFile] started');

	fs.readFile("/dev/random", function (err, data) {
		if (err) {
			// handle the error
			console.error(err);
		} else {
			// process the file text given with data
			console.log('file read');
		}
	});

	console.log('[readFile] ended');
}

console.log('[main] 1');

readFile();

console.log('[main] 2');
