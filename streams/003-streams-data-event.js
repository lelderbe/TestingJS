const { createReadStream } = require('fs');
const path = require('path');

const FILE_NAME = path.resolve(process.cwd(), './data/book-war-and-peace.txt');

const readStream = createReadStream(FILE_NAME, { highWaterMark: 2 ** 16 }); // 64k by default

let totalSize = 0;

readStream.on('data', chunk => {
	console.log('Received %d bytes of data', chunk.length);
	totalSize += chunk.length;
});

readStream.once('end', () => {
	console.log('Total size: %d', totalSize);
});

readStream.once('close', () => {
	console.log('Stream closed');
});
