'use strict';

function ex01() {
	let user = {
		name: 'John',
		surname: 'Smith',

		get fullName() {
			return `${this.name} ${this.surname}`;
		},
	};

	console.log(user.fullName); // John Smith
	user.fullName = 123;
}

// ex01();

function ex02() {
	let user = {
		name: 'John',
		surname: 'Smith',

		get fullName() {
			return `${this.name} ${this.surname}`;
		},

		set fullName(value) {
			[this.name, this.surname] = value.split(' ');
		},
	};

	console.log(user.fullName); // John Smith
	user.fullName = 'Mary Ann';
	console.log(user.fullName); // Mary Ann
}

ex02();
