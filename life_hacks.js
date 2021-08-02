function ex_life_hacks() {
	console.log('\n------------ life hacks --------------');

	value = 100;

	console.log('value :', value);
	console.log('convert to boolean: !!value :', !!value);
	console.log('!!"" :', !!'');
	console.log('!!" " :', !!' ');
	console.log('value.toString(2) :', value.toString(2));
	console.log('undefined :', undefined);
	
	let max_witdh;
	prefs = {}
	// prefs.max_witdh = 100;
	prefs.max_witdh = 0;
	
	max = max_witdh && prefs.max_witdh && 500;
	console.log('max = max_witdh && prefs.max_witdh && 500 :', max);
	max = max_witdh || prefs.max_witdh || 500;
	console.log('max = max_witdh || prefs.max_witdh || 500 :', max);
	max = max_witdh ?? prefs.max_witdh ?? 500;
	console.log('max = max_witdh ?? prefs.max_witdh ?? 500 :', max);

	// console.log('this :', this);
}

ex_life_hacks();

// console.log('this :', this);

