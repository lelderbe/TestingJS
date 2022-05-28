var timer = setTimeout(() => console.log('Hi from timer'), 2000);

console.log('main thread');
console.log(timer);

let count = 0;
var interval = setInterval(() => {
	if (count == 10) {
		clearInterval(interval);
	}
	console.log(count * 100);
	count++;
}, 100);

