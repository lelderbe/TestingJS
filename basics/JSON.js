function ex00() {
	console.log('\n---------- Task: Преобразуйте объект в JSON, а затем обратно в обычный объект -----------');
	{
		const user = {
			name: "Василий Иванович",
			age: 35
		};
		console.log('user:', user);
		const serialized = JSON.stringify(user);
		console.log('serialized:', serialized);
		const user2 = JSON.parse(serialized);
		console.log('user2:', user2);
	}

	console.log('\n---------- Task: Исключить обратные ссылки -----------');
	{
		let room = {
			number: 23
		};

		let meetup = {
			title: "Совещание",
			occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
			place: room
		};

		// цикличные ссылки
		room.occupiedBy = meetup;
		meetup.self = meetup;

		console.log('room:', room);
		console.log('meetup:', meetup);

		console.log(JSON.stringify(meetup, function replacer(key, value) {
			return (key != "" && value == meetup) ? undefined : value;
		}));

		/* в результате должно быть:
		{
		  "title":"Совещание",
		  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
		  "place":{"number":23}
		}
		*/
	}
}

ex00();
