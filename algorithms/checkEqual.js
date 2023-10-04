function recursivelyCheckEqual(x, ...rest) {
    return Object.is(x, rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest));
}

console.log('recursivelyCheckEqual');
console.log(recursivelyCheckEqual(...[1, 1, 1, 1]));
console.log(recursivelyCheckEqual(...[1, 1, 1, 2]));

function recursivelyCheckEqualPairs(x, ...rest) {
    return Object.is(x, rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest.slice(1)));
}

console.log('recursivelyCheckEqualPairs');
console.log(recursivelyCheckEqualPairs(...[1, 1, 1, 1]));
console.log(recursivelyCheckEqualPairs(...[1, 1, 1, 2]));
console.log(recursivelyCheckEqualPairs(...[1, 1, 2, 2]));

function iterativelyCheckEqual(x, ...rest) {
    return rest.every((item) => item === x);
}

console.log('iterativelyCheckEqual');
console.log(iterativelyCheckEqual(...[1, 1, 1, 1]));
console.log(iterativelyCheckEqual(...[1, 1, 1, 2]));
