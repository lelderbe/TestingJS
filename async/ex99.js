const sendRequest = async () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('resolving');
			resolve(true);
		}, 2000);
	});

const startSending = async () => {
	console.log('1');
	const result = await sendRequest();
	console.log('2');
};

console.log('3');
startSending();
console.log('4');
