setTimeout(() => console.log('A'), 10);

setImmediate(() => console.log('B'));

queueMicrotask(() => console.log('C'));

process.nextTick(() => console.log('D'));
