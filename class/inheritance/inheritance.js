function ex01() {
	console.log('\n-------------- Наследование классов -----------------');
	class Animal {
		constructor(name) {
			this.speed = 0;
			this.name = name;
		}
		run(speed) {
			this.speed = speed;
			console.log(`${this.name} бежит со скоростью ${this.speed}.`);
		}
		stop() {
			this.speed = 0;
			console.log(`${this.name} стоит.`);
		}
	}

	// Наследуем от Animal указывая "extends Animal"
	class Rabbit extends Animal {
		hide() {
			console.log(`${this.name} прячется!`);
		}
	}

	const rabbit = new Rabbit("Белый кролик");
	rabbit.run(5); // Белый кролик бежит со скоростью 5.
	rabbit.hide(); // Белый кролик прячется!
}

// ex01();

function ex02() {
	console.log('\n-------------- Переопределение методов -----------------');
	class Animal {
		constructor(name) {
			this.speed = 0;
			this.name = name;
		}
		run(speed) {
			this.speed = speed;
			console.log(`${this.name} бежит со скоростью ${this.speed}.`);
		}
		stop() {
			this.speed = 0;
			console.log(`${this.name} стоит.`);
		}
	}

	// Наследуем от Animal указывая "extends Animal"
	class Rabbit extends Animal {
		stop() {
			super.stop(); // вызываем родительский метод stop
			this.hide(); // и затем hide
		}
		// stop() {
		// 	setTimeout(() => super.stop(), 1000); // вызывает родительский stop после 1 секунды
		// }
		hide() {
			console.log(`${this.name} прячется!`);
		}
	}

	const rabbit = new Rabbit("Белый кролик");
	rabbit.run(5); // Белый кролик бежит со скоростью 5.
	rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!
}

// ex02();

function ex03() {
	console.log('\n-------------- Переопределение конструктора -----------------');
	class Animal {
		constructor(name) {
			this.speed = 0;
			this.name = name;
		}
		run(speed) {
			this.speed = speed;
			console.log(`${this.name} бежит со скоростью ${this.speed}.`);
		}
		stop() {
			this.speed = 0;
			console.log(`${this.name} стоит.`);
		}
	}

	class Rabbit extends Animal {
		constructor(name, earLength) {
			super(name);
			this.earLength = earLength;
		}
		hide() {
			console.log(`${this.name} прячется!`);
		}
	}

	const rabbit = new Rabbit("Белый кролик", 10);
	console.log(rabbit.name); // Белый кролик
	console.log(rabbit.earLength); // 10
}

// ex03();

function ex04() {
	console.log('\n-------------- Task: Улучшенные часы -----------------');
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

	class ExtendedClock extends Clock {
		constructor({ template, precision = 1000 }) {
			super({ template });
			this.precision = precision;
		}
		start() {
			this.render();
			this.timer = setInterval(() => this.render(), this.precision);
		}
	};

	// const clock = new Clock({template: 'h:m:s'});
	// clock.start();
	const clock = new ExtendedClock({ template: 'h:m:s', precision: 3000 });
	clock.start();

}

ex04();
