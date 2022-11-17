function f2(n) {
  console.log('[f2] n:', n);
  return new Promise((resolve, reject) => {
    console.log('Start promise resolving...');
    if (Date.now() % 3 !== 0) {
      resolve(n * 2);
    } else {
      reject('Bad data');
    }
  });
}

// console.log(f2(4));

f2(6)
  .then((data) => console.log('got data from Promise:', data))
  .catch((err) => console.log('got error from Promise:', err));
