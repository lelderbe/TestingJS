function ex01() {
	function Rabbit(name) {
		this.name = name;
	}
	Rabbit.prototype.jumps = true;

	const rabbit = new Rabbit('one');
	console.log(rabbit);
	console.log(rabbit.jumps);
	console.log(Rabbit.prototype);
	console.log(Rabbit.prototype.constructor);
	console.log(rabbit.constructor);
}

ex01();
