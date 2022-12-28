function ex01() {
	console.log('\n-------------- Базовый синтаксис -----------------');
	class User {
		age = 20;				// property

		constructor(name) {		// constructor
			this.name = name;
		}

		hi() {					// method
			console.log('Hi');
		}

		bye() {					// method
			console.log('Bye');
		}

		get name() {			// getter
			return this._name;
		}

		set name(value) {		// setter
			// if (value.length < 4) {
			// 	console.log("Имя слишком короткое.");
			// 	return;
			// }
			this._name = value;
		}
	}

	const user = new User('John');
	console.log('user:', user);
	const user2 = new User();
	console.log('user2:', user2);
	user.hi();
	user2.bye();

	console.log('{ ...user }:', { ...user });
	console.log('user._name:', user._name, 'user.age:', user.age);
	console.log('user.name:', user.name, 'user.age:', user.age);

}

// ex01();

function ex02() {
	console.log('\n-------------- Task: Класс Clock написан в функциональном стиле -----------------');
	function Clock({ template }) {
		let timer;

		function render() {
			let date = new Date();

			let hours = date.getHours();
			if (hours < 10) hours = '0' + hours;

			let mins = date.getMinutes();
			if (mins < 10) mins = '0' + mins;

			let secs = date.getSeconds();
			if (secs < 10) secs = '0' + secs;

			let output = template
				.replace('h', hours)
				.replace('m', mins)
				.replace('s', secs);

			console.log(output);
		}

		this.stop = function() {
			clearInterval(timer);
		};

		this.start = function() {
			render();
			timer = setInterval(render, 1000);
		};
	}
	let clock = new Clock({template: 'h : m : s'});
	clock.start();

}

// ex02();

function ex03() {
	console.log('\n-------------- Task: Перепишите его, используя синтаксис классов -----------------');
	class Clock {
		constructor({ template }) {
			this.template = template;
		}

		render() {
			let date = new Date();

			let hours = date.getHours();
			if (hours < 10) hours = '0' + hours;

			let mins = date.getMinutes();
			if (mins < 10) mins = '0' + mins;

			let secs = date.getSeconds();
			if (secs < 10) secs = '0' + secs;

			let output = this.template
				.replace('h', hours)
				.replace('m', mins)
				.replace('s', secs);

			console.log(output);
		}

		stop() {
			clearInterval(this.timer);
		}

		start() {
			this.render();
			this.timer = setInterval(() => this.render(), 1000);
		}
	}

	const clock = new Clock({template: 'h:m:s'});
	clock.start();

}

ex03();
