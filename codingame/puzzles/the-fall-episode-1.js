/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const LEFT = { x: -1, y: 0 };
const RIGHT = { x: 1, y: 0 };
const DOWN = { x: 0, y: 1 };

const rooms = [
    {},
    { TOP: DOWN, LEFT: DOWN, RIGHT: DOWN },
    { LEFT: RIGHT, RIGHT: LEFT },
    { TOP: DOWN },
    { TOP: LEFT, RIGHT: DOWN },
    { TOP: RIGHT, LEFT: DOWN },
    { LEFT: RIGHT, RIGHT: LEFT },
    { TOP: DOWN, RIGHT: DOWN },
    { LEFT: DOWN, RIGHT: DOWN },
    { LEFT: DOWN, TOP: DOWN },
    { TOP: LEFT },
    { TOP: RIGHT },
    { RIGHT: DOWN },
    { LEFT: DOWN },
];

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // number of columns.
const H = parseInt(inputs[1]); // number of rows.
let cave = [];
for (let i = 0; i < H; i++) {
    const types = readline().split(' ').map((item) => rooms[+item]);
    cave.push(types);
}
const EX = parseInt(readline());

while (true) {
    var inputs = readline().split(' ');
    const XI = +parseInt(inputs[0]);
    const YI = +parseInt(inputs[1]);
    const POS = inputs[2];

    let x = XI + cave[YI][XI][POS].x;
    let y = YI + cave[YI][XI][POS].y;

    console.log(x, y);
}
