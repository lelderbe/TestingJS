async function hardWork() {
	console.log('[hardWork] started');

	for (let i = 0; i < 4_000_000_000; i++) {
		i * 2;
	}

	console.log('[hardWork] ended');
	return 'hard work done';
}

async function runHardWork() {
	console.log('[runHardWork] started');

	await hardWork();

	console.log('[runHardWork] ended');
}

console.log('[main] 1');

runHardWork();

console.log('[main] 2');
