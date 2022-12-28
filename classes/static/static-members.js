function ex01() {
	console.log('\n-------------- Статические свойства и методы -----------------');
	class User {
		static name = 'admin';

		static staticMethod() {
			console.log(this === User);
		}
	}

	User.staticMethod(); // true
	console.log(User.name);
}

// ex01();

function ex02() {
	console.log('\n-------------- Наследование статических свойств и методов -----------------');
	class Animal {
		static prop = 'animal';

		static sound() {
			console.log('Animal sound');
		}
	}

	class Cat extends Animal {

	}

	Animal.sound();
	Cat.sound();
	console.log(Animal.prop);
	console.log(Cat.prop);
	console.log(Cat.name);
}

ex02();
