// https://www.codingame.com/clashofcode/clash/report/23180849d32f902b0666394d7402f9a7bc39f20

const n = parseInt(readline());
const arr = [];
let max_h = 0;
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const h = parseInt(inputs[0]);
    const w = parseInt(inputs[1]);
    const o = parseInt(inputs[2]);

    max_h = max_h < h ? h : max_h;

    for (let j = 0; j < w; j++) {
        arr.push(h);
    }

    for (let j = 0; j < o; j++) {
        arr.push(0);
    }
}

while (max_h) {
    let line = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max_h) {
            line += '.';
        } else {
            line += '#';
        }
    }
    console.log(line);
    max_h--;    
}