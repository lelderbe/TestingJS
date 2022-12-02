const n = 3;
const values = '5 3+3-1+1-1+0 8';

const parts = values.split(' ');
const results = [];

for (const part of parts) {
	results.push(eval(part));
}

// console.log(results);

let line = '';
for (let i = 0; i < parts.length - 1; i++) {
	line += parts[i];
	if (results[i] < results[i + 1]) line += ' < ';
	if (results[i] == results[i + 1]) line += ' = ';
	if (results[i] > results[i + 1]) line += ' > ';
}
line += parts[parts.length - 1];

console.log(line);
