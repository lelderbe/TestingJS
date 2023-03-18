function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

console.log(1);
delay(1000).then(() => console.log('first 1000'));
console.log(2);
delay(1000).then(() => console.log('second 1000'));
console.log(3);

// Promise.All

Promise.all([delay(1000), delay(5000), delay(3000)])
  .then(() => {
    console.log('All done');
  })
  .catch((err) => {
    console.log('Error');
  });

console.log(4);

// Promise.race

Promise.race([delay(1000), delay(5000), delay(3000)])
  .then(() => {
    console.log('Race: First done');
  })
  .catch((err) => {
    console.log('Error');
  });

console.log(5);
