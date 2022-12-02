function memoize(f) {
  const cache = new Map();

  return function(...args) {
    const key = args.length + args.join('+');

    if (cache.has(key)) {
      console.log('return memoized value:', cache.get(key));
      return cache.get(key);
    }

    const result = f.apply(this, args);
    cache.set(key, result);
    return result;
  }
}

function ex00() {
	console.log('\n------------ Memoize recurrsion function ---------------');

  const factorial = memoize((n) => {
    console.log('calculation...', n);
    return (n <= 1) ? 1 : n * factorial(n - 1);
  });
  const result = factorial(3);
  console.log(result);
  const result2 = factorial(6);
  console.log(result2);
}

ex00();

function ex01() {
	console.log('\n------------ Memoize simple function ---------------');

  function test(n) {
    console.log('calculation...', n);
    return n * 2;
  }
  
  const memoizedTest = memoize(test);
  memoizedTest(1);
  memoizedTest(2);
  memoizedTest(4);
  const result = memoizedTest(3);
  console.log(result);
  const result2 = memoizedTest(3);
  console.log(result2);
  console.log(memoizedTest(4));
}

ex01();
