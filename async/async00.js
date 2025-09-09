async function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const logDelayedMessages = async () => {
    console.log('before first timeout');
    await timeout(1000);
    console.log('Hi after 1 second');
    await timeout(1000);
    console.log('Hi after 2 seconds');
};

logDelayedMessages();
console.log(1);
