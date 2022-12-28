function ex01() {
	console.log('\n-------------- instanceof -----------------');
	class Rabbit {}
	const rabbit = new Rabbit();

	// это объект класса Rabbit?
	console.log(rabbit instanceof Rabbit); // true
	console.log([] instanceof Array);
	console.log([] instanceof Object);
	console.log('abc' instanceof Object);
}

ex01();

function ex02() {
	console.log('\n-------------- Symbol.hasInstance -----------------');
	// проверка instanceof будет полагать,
	// что всё со свойством canEat - животное Animal
	class Animal {
		static [Symbol.hasInstance](obj) {
			if (obj.canEat) return true;
		}
	}

	let obj = { canEat: true };
	console.log(obj instanceof Animal); // true: вызван Animal[Symbol.hasInstance](obj)
}

// ex02();

function ex03() {
	console.log('\n-------------- instanceof -----------------');
	class Animal {}
	class Rabbit extends Animal {}

	let rabbit = new Rabbit();
	console.log(rabbit instanceof Animal); // true

	// rabbit.__proto__ === Animal.prototype (нет совпадения)
	// rabbit.__proto__.__proto__ === Animal.prototype (совпадение!)
}

// ex03();
