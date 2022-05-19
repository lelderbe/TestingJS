const fs = require("fs");
const fss = require("fs/promises");
const fsss = require('fs').promises;

async function sleep(msec) {
	return new Promise(resolve => setTimeout(resolve, msec));
}

async function hardWork() {
	console.time('hw');
	console.log('[hardWork] start hard work');
	for (let i = 0; i < 4_000_000_000; i++) {
		i * 2;
	}
	console.log('[hardWork] hard work done');
	console.timeEnd('hw');
	return 'hard work done';
}

async function loopWork() {
	console.log('[loopWork] started');
	for (let i = 0; i < 10; i++) {
		console.log('some loop: %d', i);
		// await sleep(1000);
		let e = new Date().getTime() + (1 * 1000);
		while (new Date().getTime() <= e) {}
	}
	console.log('[loopWork] ended');
}

async function doHardWorkAsync() {
	console.log('[doHardWorkAsync] started');
	return new Promise((resolve) => {
		console.time('ahw');
		console.log('[doHardWorkAsync Promise] started');
		let e = new Date().getTime() + (3 * 1000);
		setTimeout(async () => {
			// hardWork();
			// await sleep(3000);
			while (new Date().getTime() <= e) {}
			console.log('[doHardWorkAsync Promise] ended');
			console.timeEnd('ahw');
			return resolve('done');
		}, 0)
	})
}

function readFileContentsCallback() {
	console.log('before readFile');
	fs.readFile("/dev/random", function (err, data) {
		if (err) {
			// handle the error
			console.error(err);
		} else {
			// process the file text given with data
			console.log('file read');
		}
	});
	console.log('after readFile');
}

async function readFileContentsAwait() {
	console.log('[readFileContentsAwait] started');
	data = await fsss.readFile("/dev/random");
	console.log('[readFileContentsAwait] ended');
	return data;
}

async function main() {
	console.log('[main] 1');

	// readFileContentsCallback();
	const data = readFileContentsAwait();

	console.log('[main] data = readFileContentsAwait():', data);

	const hw = hardWork();
	console.log('[main] hw = hardWork():', hw);
	console.log('[main] await hw:', await hw);

	console.log('[main] 2');

	const a = doHardWorkAsync();
	console.log('[main] a = doHardWorkAsync():', a);

	console.log('[main] 2.5');

	setTimeout(hardWork, 0);

	console.log('[main] 3');

	setTimeout(loopWork, 0);

	console.log('[main] wait for data: await data');
	await data;

	console.log(await a);
	console.log('end');
}

main();
