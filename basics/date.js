function ex00() {
	{
		// текущая дата
		let date = new Date();

		// час в вашем текущем часовом поясе
		console.log(date.getHours());

		// час в часовом поясе UTC+0 (лондонское время без перехода на летнее время)
		console.log(date.getUTCHours());

		console.log(date);
		console.log(date.getTime());
	}

	console.log('\n---------- 2 -----------');
	{
		let date;

		date = new Date();
		console.log(date);
		console.log(date.getUTCHours());

		date = new Date(-1);
		console.log(date);

		date = new Date(2021, 0, 1);
		console.log(date);

		date = new Date('2021-01-15'); // YYYY-MM-DDTHH:mm:ss.sssZ
		console.log(date);

		let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
		console.log('timestamp:', ms); // 1327611110417 (таймстамп)
		console.log('new Date(ms):', new Date(ms));

		// если вы в часовом поясе UTC-1, то выводится 60
		// если вы в часовом поясе UTC+3, выводится -180
		console.log(new Date().getTimezoneOffset());

		console.log(date.getDate());

		date = new Date(2016, 1, 28);
		date.setDate(date.getDate() + 2);
		console.log(date); // 1 Mar 2016
	}

	console.log('\n---------- 3 -----------');
	{
		let date;

		console.log(new Date().getTime());
		console.log(Date.now());
	}
}

// ex00();

function ex01() {
	console.log('\n---------- Task: Создайте дату -----------');
	{
		console.log(new Date(Date.parse('2012-01-20T03:12')));
		console.log(new Date('2012-01-20T03:12'));
		console.log(new Date(2012, 1, 20, 3, 12));
	}

	console.log('\n---------- Task: Покажите день недели -----------');
	{
		function getWeekDay(date) {
			switch (date.getDay()) {
				case 0: return 'ВС';
				case 1: return 'ПН';
				case 2: return 'ВТ';
				case 3: return 'СР';
				case 4: return 'ЧТ';
				case 5: return 'ПТ';
				case 6: return 'СБ';
			}
		}

		function getWeekDay2(date) {
			let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
			return days[date.getDay()];
		}

		let date = new Date(2012, 0, 3);  // 3 января 2012 года
		console.log(getWeekDay(date));        // нужно вывести "ВТ"
		console.log(getWeekDay2(date));        // нужно вывести "ВТ"
	}

	{
		function getDateAgo(date, days) {
			const d = new Date(date);
			return new Date(d.setDate(d.getDate() - days));
		}

		let date = new Date(2015, 0, 2);

		console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
		console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
		console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
	}
}

ex01();
