setTimeout(() => console.log('hello'))

Promise.resolve()
  .then(function one() { console.log(1) })
  .then(function two() { console.log(2); throw new Error(); })
  .then(function four() { console.log(4) })
  .catch(function three() { console.log(3) })

Promise.resolve()
  .then(function five() { console.log(5) })
  .then(function six() { console.log(6); throw new Error(); })
  .catch(function seven() { console.log(7) })
  .then(function three() { console.log(8) })

console.log('privet')
