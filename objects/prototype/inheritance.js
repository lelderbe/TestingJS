function ex01() {
	console.log('\n------------ property inheritance ---------------');
	let animal = {
		eats: true
	};
	let rabbit = {
		jumps: true
	};

	rabbit.__proto__ = animal;

	console.log('animal:', animal);
	console.log('rabbit:', rabbit);
	console.log('rabbit.eats:', rabbit.eats);
}

// ex01();

function ex02() {
	console.log('\n------------ method inheritance ---------------');
	let animal = {
		eats: true,
		walk() {
			console.log("Animal walk");
		}
	};
	let rabbit = {
		jumps: true,
		__proto__: animal
	};

	console.log('animal.__proto__:', animal.__proto__);
	console.log('Object.getPrototypeOf(animal):', Object.getPrototypeOf(animal));
	console.log('rabbit.__proto__:', rabbit.__proto__);
	console.log('Object.getPrototypeOf(rabbit):', Object.getPrototypeOf(rabbit));
	console.log('animal:', animal);
	console.log('rabbit:', rabbit);
	console.log('rabbit.eats:', rabbit.eats);
	rabbit.walk();

}

// ex02();

function ex03() {
	console.log('\n------------ several __proto__ ---------------');
	let animal = {
		eats: true,
		walk() {
			console.log("Animal walk");
		}
	};

	let rabbit = {
		jumps: true,
		__proto__: animal
	};

	let longEar = {
		earLength: 10,
		__proto__: rabbit
	};

	// walk взят из цепочки прототипов
	longEar.walk(); // Animal walk
	console.log(longEar.jumps); // true (из rabbit)
	console.log('Object.getPrototypeOf(longEar):', Object.getPrototypeOf(longEar));
	console.log('Object.getPrototypeOf(longEar):', Object.getPrototypeOf(Object.getPrototypeOf(longEar)));
	console.log('Object.getPrototypeOf(longEar):', Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(longEar))));
	console.log('Object.getPrototypeOf(longEar):', Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(longEar)))));

	let arr = [1, 2, 3];
	console.log('Object.getPrototypeOf(arr):', Object.getPrototypeOf(arr));
	console.log('Object.getPrototypeOf(arr):', Object.getPrototypeOf(Object.getPrototypeOf(arr)));
	console.log(arr.__proto__);
	console.log(arr.__proto__.__proto__);
	console.log(arr.__proto__ === Array.prototype);

}

ex03();

function ex04() {
	console.log('\n------------ this ---------------');
	// методы animal
	let animal = {
		walk() {
			if (!this.isSleeping) {
				console.log('I walk');
			}
		},
		sleep() {
			this.isSleeping = true;
		},
	};

	let rabbit = {
		name: "White Rabbit",
		__proto__: animal,
	};

	// модифицирует rabbit.isSleeping
	rabbit.sleep();
	console.log('rabbit.isSleeping:', rabbit.isSleeping); // true
	console.log('animal.isSleeping:', animal.isSleeping); // undefined (нет такого свойства в прототипе)
}

// ex04();

function ex05() {
	console.log('\n------------ for in ---------------');

	let animal = {
		eats: true
	};

	let rabbit = {
		jumps: true,
		__proto__: animal
	};

	// Object.keys возвращает только собственные ключи
	console.log(Object.keys(rabbit)); // jumps

	// for..in проходит и по своим, и по унаследованным ключам
	for(let prop in rabbit) console.log(prop); // jumps, затем eats
}

ex05();
