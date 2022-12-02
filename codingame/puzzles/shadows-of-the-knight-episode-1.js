// https://www.codingame.com/ide/puzzle/shadows-of-the-knight-episode-1

function solution() {
	/**
	 * Auto-generated code below aims at helping you parse
	 * the standard input according to the problem statement.
	 **/


	var inputs = readline().split(' ');
	const W = parseInt(inputs[0]); // width of the building.
	const H = parseInt(inputs[1]); // height of the building.
	const N = parseInt(readline()); // maximum number of turns before game over.
	var inputs = readline().split(' ');
	let x = parseInt(inputs[0]);
	let y = parseInt(inputs[1]);

	let [startRow, endRow] = [0, H - 1];
	let [startColumn, endColumn] = [0, W - 1];

	while (true) {
		const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

		switch (bombDir) {
			case 'U'  : startColumn = endColumn = x; endRow = y - 1; break;
			case 'UL' : endColumn = x - 1; endRow = y - 1; break;
			case 'UR' : startColumn = x + 1; endRow = y - 1; break;
			case 'D'  : startColumn = endColumn = x; startRow = y + 1; break;
			case 'DL' : endColumn = x - 1; startRow = y + 1; break;
			case 'DR' : startColumn = x + 1; startRow = y + 1; break;
			case 'L'  : startRow = endRow = y; endColumn = x - 1; break;
			case 'R'  : startRow = endRow = y; startColumn = x + 1; break;
		}

		x = startColumn + Math.ceil((endColumn - startColumn) / 2);
		y = startRow + Math.ceil((endRow - startRow) / 2);

		console.log(x, y);
	}
}

function solution_v2() {
	/**
	 * Auto-generated code below aims at helping you parse
	 * the standard input according to the problem statement.
	 **/

	var inputs = readline().split(' ');
	const W = parseInt(inputs[0]); // width of the building.
	const H = parseInt(inputs[1]); // height of the building.
	const N = parseInt(readline()); // maximum number of turns before game over.
	var inputs = readline().split(' ');
	var X0 = parseInt(inputs[0]);
	var Y0 = parseInt(inputs[1]);

	var box = {
		'U': 0,
		'D': H,
		'L': 0,
		'R': W
	}

	// game loop
	while (true) {
		const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
	
		// Write an action using console.log()
		// To debug: console.error('Debug messages...');
		bombDir.split("").forEach(function (dir){
			if (dir == "R") {
				box['L'] = X0;
				X0 += Math.ceil((box[dir]-X0)/2);
			}
			else if (dir == "L") {
				box['R'] = X0;
				X0 -= Math.ceil((X0-box[dir])/2);
			}
			else if (dir == "D") {
				box['U'] = Y0;
				Y0 += Math.ceil((box[dir]-Y0)/2);
			}
			else if (dir == "U") {
				box['D'] = Y0;
				Y0 -= Math.ceil((Y0-box[dir])/2);
			}
		});

		// the location of the next window Batman should jump to.
		console.log(X0+' '+Y0);
	}
}

function solution_v3() {
	var inputs = readline().split(' ');
	var building = {    // Used to keep building info
		maxX: parseInt(inputs[0]),
		minX: 0,
		maxY: parseInt(inputs[1]),
		minY: 0,
	};
	
	var turnsleft = parseInt(readline()); // I really don't care...
	
	var inputs = readline().split(' ');
	var hero = {        // Used to keep Batman's info
		x: parseInt(inputs[0]),
		y: parseInt(inputs[1])
	};
	
	while (true) {
		printErr('dir', dir = readline());
		
		if (dir.contains('R')) building.minX = hero.x;  // No point in searching left
		if (dir.contains('L')) building.maxX = hero.x;  // No point in searching right
		if (dir.contains('U')) building.maxY = hero.y;  // No point in searching down
		if (dir.contains('D')) building.minY = hero.y;  // No point in searching up
		
		hero.x = (building.maxX + building.minX) >> 1;  // Division by 2 without remainder :)
		hero.y = (building.maxY + building.minY) >> 1;
		
		// Show new values
		printErr('building:', JSON.stringify(building));
		printErr('hero:', JSON.stringify(hero));
		
		// Send results
		print(hero.x, hero.y);
	}
}

function solution_v4() {
	function getDirection() {
		let bombDir = '';
		if (hero.x != bomb.x) {
			bombDir += hero.x < bomb.x ? 'R' : 'L';
		}
		if (hero.y != bomb.y) {
			bombDir += hero.y < bomb.y ? 'D' : 'U';
		}
		return bombDir;
	}

	var inputs = '100 100'.split(' ');
	const W = parseInt(inputs[0]); // width of the building.
	const H = parseInt(inputs[1]); // height of the building.
	//    const N = parseInt(readline()); // maximum number of turns before game over.
	var inputs = '5 80'.split(' ');
	const X0 = parseInt(inputs[0]);
	const Y0 = parseInt(inputs[1]);

	const box = {
		L: 0,
		R: W - 1,
		T: 0,
		B: H - 1,
	}

	const hero = {
		x: X0,
		y: Y0,
	}

	const bomb = {
		x: 99,
		y: 0,
	}

	while (bomb.x != hero.x || bomb.y != hero.y) {
		let bombDir = getDirection();

		console.error(bombDir, '[', box.L, '-', box.R, '][', box.T, '-', box.B, '] x:', hero.x, 'y:', hero.y);

		// if (bombDir.length == 1) {
		// 	if (bombDir.includes('U') || bombDir.includes('D')) box.L = box.R = hero.x;
		// 	if (bombDir.includes('L') || bombDir.includes('R')) box.T = box.B = hero.y;
		// }

		console.error('[', box.L, '-', box.R, '][', box.T, '-', box.B, '] x:', hero.x, 'y:', hero.y);

		if (bombDir.includes('U')) box.B = hero.y - 1;
		if (bombDir.includes('D')) box.T = hero.y + 1;
		if (bombDir.includes('L')) box.R = hero.x - 1;
		if (bombDir.includes('R')) box.L = hero.x + 1;
	
		hero.x = (box.L + box.R) >> 1;
		hero.y = (box.T + box.B) >> 1;
	
		console.error('[', box.L, '-', box.R, '][', box.T, '-', box.B, '] x:', hero.x, 'y:', hero.y);
	
		console.log(hero.x, hero.y);
	}
}

solution_v4();
