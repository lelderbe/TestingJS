const { createReadStream } = require('fs');
const path = require('path');

const FILE_NAME = path.resolve(process.cwd(), './data/book-war-and-peace.txt');

const readStream = createReadStream(FILE_NAME);

readStream.once('close', () => {
	console.log('Stream closed');
});

(async function () {
	let totalSize = 0;

	for await (let chunk of readStream) {
		console.log('Received %d bytes of data', chunk.length);
		totalSize += chunk.length;
	}
	console.log('Total size: %d', totalSize);
})().catch(error => console.log(error));
