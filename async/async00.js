const logDelayedMessages = async () => {
	await timeout(1000);
	console.log('Hi after 1 second');
	await timeout(1000);
	console.log('Hi after 2 seconds');
};

logDelayedMessages();