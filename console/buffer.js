const buf1 = Buffer.alloc(10);

console.log(buf1);

buf1.write('abc');

console.log(buf1);

const buf2 = Buffer.from('A011FF', 'hex');

console.log(buf2);

buf2.write('1234');

console.log(buf2);
console.log(buf2.toString());

// console.log(Buffer.concat(buf1, buf2));

// from hex-string with cut spaces to string
console.log(Buffer.from('61 62 63 64'.split(' ').join(''), 'hex').toString());

const arr1 = new Uint16Array(10);

console.log(arr1);

const buf4 = Buffer.from(arr1.buffer);

console.log(buf4);

buf4.write('ABC');
console.log(buf4);
