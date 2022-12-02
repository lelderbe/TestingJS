function benchmark() {
	console.time('label');
	for (let i = 0; i < 1_000_000_000; i++);
	console.timeEnd('label');
}

benchmark();
