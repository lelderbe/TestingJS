function ex01() {
	console.log('\n-------------- public -----------------');
	class CoffeeMachine {
		waterAmount = 0; // количество воды внутри

		constructor(power) {
			this.power = power;
			console.log(`Создана кофеварка, мощность: ${power}`);
		}
	}

	// создаём кофеварку
	const coffeeMachine = new CoffeeMachine(100);

	// добавляем воды
	coffeeMachine.waterAmount = 200;

	console.log(coffeeMachine);
}

// ex01();

function ex02() {
	'use strict';

	console.log('\n-------------- protected -----------------');
	class CoffeeMachine {
		_waterAmount = 0; // количество воды внутри

		constructor(power) {
			this._power = power;
			console.log(`Создана кофеварка, мощность: ${power}`);
		}

		get power() {
			return this._power;
		}

		set waterAmount(value) {
			if (value < 0) throw new Error("Отрицательное количество воды");
			this._waterAmount = value;
		}

		get waterAmount() {
			return this._waterAmount;
		}
	}

	// создаём кофеварку
	const coffeeMachine = new CoffeeMachine(100);

	// добавляем воды
	coffeeMachine.waterAmount = 200;
	// coffeeMachine.waterAmount = -200;
	// coffeeMachine.power = 25; // Error (no setter)

	console.log(coffeeMachine);
}

// ex02();

function ex03() {
	console.log('\n-------------- Геттеры/сеттеры - другие имена -----------------');
	class CoffeeMachine {
		_waterAmount = 0;

		setWaterAmount(value) {
			if (value < 0) throw new Error("Отрицательное количество воды");
			this._waterAmount = value;
		}

		getWaterAmount() {
			return this._waterAmount;
		}
	}

	const coffeeMachine = new CoffeeMachine();
	coffeeMachine.setWaterAmount(100);
	console.log(coffeeMachine);
}

// ex03();

function ex04() {
	console.log('\n-------------- private -----------------');
	class CoffeeMachine {
		#waterAmount = 0;
		#a = 1;

		get waterAmount() {
			return this.#waterAmount;
		}

		set waterAmount(value) {
			if (value < 0) throw new Error("Отрицательный уровень воды");
			this.#waterAmount = value;
		}
	}

	class MegaCoffeeMachine extends CoffeeMachine {
		a = 2;
		method() {
			// console.log(this.#waterAmount); // Error: can only access from CoffeeMachine
			console.log(this.waterAmount);
		}
	}

	const machine = new CoffeeMachine();

	machine.waterAmount = 100;
	// console.log(machine.#waterAmount); // Error
	console.log(machine);
	console.log(machine.waterAmount);

	const mega = new MegaCoffeeMachine();
	mega.waterAmount = 50;
	mega.method();
	console.log(mega.a);
}

ex04();
