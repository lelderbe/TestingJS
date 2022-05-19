const { createReadStream } = require('fs');
const path = require('path');

const FILE_NAME = path.resolve(process.cwd(), './data/book-war-and-peace.txt');
const READ_SIZE = 2 ** 16;

// const readStream = createReadStream(FILE_NAME, { highWaterMark: 2 ** 16, fd: 1, autoClose: false }); // 64k by default
// const readStream = createReadStream(FILE_NAME, { highWaterMark: 2 ** 16 }); // 64k by default
const readStream = createReadStream(FILE_NAME); // 64k by default

let totalSize = 0;

// low-level reading - not popular
readStream.on('readable', function () {
	let chunk = readStream.read(READ_SIZE);
	while (chunk !== null) {
		console.log('Received %d bytes of data', chunk.length);
		totalSize += chunk.length;
		chunk = readStream.read(READ_SIZE);
	}
});

readStream.once('end', () => {
	console.log('Total size: %d', totalSize);
});

readStream.once('close', () => {
	console.log('Stream closed');
});
