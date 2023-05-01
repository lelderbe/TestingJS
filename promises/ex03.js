const promise = new Promise((resolve, reject) => {
  const value = Math.random();
  if (value > 0.5) {
    resolve(value);
    return;
  }
  // throw new Error('bad value: ' + value);
  reject('bad value: ' + value);
});

promise.then((data) => {
  console.log('data:', data);
}).catch((err) => {
  console.log(err);
});
