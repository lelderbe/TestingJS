function getRandom(from, to) {
    const count = to - from + 1;
    return Math.floor(Math.random() * count + from);
}

function testGetRandom(from, to) {
    const variants = {};
    for (let i = 0; i < 1000; i++) {
        const value = getRandom(from, to);
        variants[value] = variants[value] ? variants[value] + 1 : 1;
    }
    console.log('from:', from, 'to:', to, variants);
}

testGetRandom(0, 10);
testGetRandom(1, 10);
testGetRandom(5, 7);
testGetRandom(-3, 3);
