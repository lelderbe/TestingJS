console.log(1);

const req = new Promise((resolve, reject) => {
  console.log(2);

  setTimeout(() => {
    console.log(3);

    if (Math.random() < 0.5) {
      reject(new Error('Failed'));
      console.log('no');
    } else {
      resolve('Success');
      console.log('yes');
    }

    console.log(4);
    return 'Hi';
  }, 2000);

  console.log(5);
});

console.log(6);

const result = req
  .then((data) => {
    console.log(7, 'data:', data);
    return 42; // return next data
  })
  .then((data) => {
    console.log(8, 'data:', data);
    setTimeout(() => {
      console.log(9);
    }, 4000);
    return 420; // return next data
  })
  .then((data) => {
    console.log(10, 'data:', data);
    return new Promise((resolve) => {
      console.log(11);
      setTimeout(() => resolve('Done'), 2000);
    });
  })
  .then((data) => {
    console.log(12, 'data:', data);
    throw new Error('Ooops'); // trigger catch section
  })
  .then((data) => {
    console.log(13, 'data:', data);
    return 21;
  })
  .catch((error) => {
    console.log(14, 'error:', error.message);
  })
  .finally((data) => {
    console.log(15, 'data:', data);
  });

console.log(16);

console.log('result:', result);
