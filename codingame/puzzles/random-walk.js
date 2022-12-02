function solution_v1() {
	const a = parseInt(readline());
	const b = parseInt(readline());
	const m = parseInt(readline());

	const pos = { x: 0, y: 0 };
	const dir = [ { dx: 0, dy: -1 }, { dx: 0, dy: 1 }, { dx: -1, dy: 0 }, { dx: 1, dy: 0 }];
	let d = 0;

	let i = 0;
	do {
		d = (a * d + b) % m;
		pos.x = pos.x + dir[d % 4].dx;
		pos.y = pos.y + dir[d % 4].dy;
		i++;
	} while (pos.x != 0 || pos.y != 0);

	console.log(i);
}

function solution_v2() {
	const a = parseInt(readline());
	const b = parseInt(readline());
	const m = parseInt(readline());

	function rand(){ return d = (a * d + b) % m }

	let x = 0
	let d = 0
	let count = 0

	do {
		count++;
		x += [1,-1, 1000, -1000][rand()%4]          // :-)
	} while ( x );

	console.log(count)
}
