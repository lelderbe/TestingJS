var inputs = readline().split(' ');
const m = parseInt(inputs[0]);
const n = parseInt(inputs[1]);
const k = parseInt(inputs[2]);
const arr = Array(m).fill().map(_ => [...readline().split(' ').map(Number)]);

let max = 0;
for (let i = 0; i < m; i = i + k) {
    for (let j = 0; j < n; j = j + k) {
        let gold = 0;
        for (let y = 0; y < k; y++) {
            for (let x = 0; x < k; x++) {
                gold += arr[i + y][j + x];
            }
        }
        max = max < gold ? gold : max;
    }
}

console.log(max);
