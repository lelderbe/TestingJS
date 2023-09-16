const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Success');
    console.log('resolved');
  }, 2000);
});

const result = promise
  .then((data) => {
    console.log(1, data);
    return 42;
  })
  .then((data) => console.log(2, data));

console.log(result);
