function solution_v1() {
	const ascii = a => a.charCodeAt(0);
	const char = i => String.fromCharCode(i);

	function parseRow(y, row, props) {
		for (let x = 0; x < row.length; x++) {
			if (row[x] !== '.') {
				const index = ascii('Z') - ascii(row[x]);
				asters[index] = { ...asters[index], [props[0]]: x, [props[1]]: y };
			}
		}
	}

	var inputs = readline().split(' ');
	const W = parseInt(inputs[0]);
	const H = parseInt(inputs[1]);
	const T1 = parseInt(inputs[2]);
	const T2 = parseInt(inputs[3]);
	const T3 = parseInt(inputs[4]);

	// console.error('T1:', T1, 'T2:', T2, 'T3:', T3);

	const asters = [];

	for (let i = 0; i < H; i++) {
		const [firstPictureRow, secondPictureRow] = readline().split(' ');
		console.error(firstPictureRow, secondPictureRow);

		parseRow(i, firstPictureRow, ['x1', 'y1']);
		parseRow(i, secondPictureRow, ['x2', 'y2']);
	}

	// calculate x3, y3 for each aster
	for (let i = 0; i < asters.length; i++) {
		if (asters[i]) {
			const a = asters[i];
			const dt = (T3 - T1) / (T2 - T1);
			const dx = a.x2 - a.x1;
			const dy = a.y2 - a.y1;
			// console.error('dt:', dt, 'dx:', dx, 'dy:', dy);
			asters[i] = {
				...a,
				x3: a.x1 + Math.floor(dx * dt),
				y3: a.y1 + Math.floor(dy * dt)
			};
		}
	}

	// console.error(asters);

	// prepare empty map
	const map = [];
	for (let i = 0; i < H; i++) {
		map.push([]);
	}

	// fill map with asters from Z downto A
	for (let i = 0; i < asters.length; i++) {
		if (asters[i]) {
			const x = asters[i].x3;
			const y = asters[i].y3;
			if (x >= 0 && x < W && y >= 0 && y < H) {
				map[y][x] = char(ascii('Z') - i);
			}
		}
	}

	// print map (sparse array in my case)
	for (let y = 0; y < H; y++) {
		let line = '';
		for (let x = 0; x < W; x++) {
			line += map[y][x] ? map[y][x] : '.';
		}
		console.log(line);
	}
}

function solution_v2() {
	function parseRow(y, row, props) {
		for (let x = 0; x < row.length; x++) {
			if (row[x] !== '.') {
				asters[row[x]] = { ...asters[row[x]], [props[0]]: x, [props[1]]: y };
			}
		}
	}

	var inputs = readline().split(' ');
	const W = parseInt(inputs[0]);
	const H = parseInt(inputs[1]);
	const T1 = parseInt(inputs[2]);
	const T2 = parseInt(inputs[3]);
	const T3 = parseInt(inputs[4]);

	const asters = {};
	const dt = (T3 - T1) / (T2 - T1);

	for (let i = 0; i < H; i++) {
		const [firstPictureRow, secondPictureRow] = readline().split(' ');
		parseRow(i, firstPictureRow, ['x1', 'y1']);
		parseRow(i, secondPictureRow, ['x2', 'y2']);
	}

	// calculate x3, y3 for each aster
	for (key in asters) {
		const a = asters[key];
		const dx = a.x2 - a.x1;
		const dy = a.y2 - a.y1;
		a.x3 = a.x1 + Math.floor(dx * dt);
		a.y3 = a.y1 + Math.floor(dy * dt);
	}

	// prepare empty map
	const map = [...Array(H)].map(_ => '.'.repeat(W).split(''));

	// fill map with asters from Z downto A
	const keys = Object.keys(asters).sort().reverse();
	for (key of keys) {
		const x = asters[key].x3;
		const y = asters[key].y3;
		if (x >= 0 && x < W && y >= 0 && y < H) {
			map[y][x] = key;
		}
	}

	// print map
	for (let y = 0; y < H; y++) {
		console.log(map[y].join(''));
	}
}