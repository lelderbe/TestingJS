const person = {
	name: "Joe",
	age: 33,
	greet: function () {
		console.log('Greet!');
	}
}

console.log(person);

Object.prototype.sayHello = function () {
	console.log('Hello');
}

const lena = Object.create(person);

lena.__proto__ = null;
