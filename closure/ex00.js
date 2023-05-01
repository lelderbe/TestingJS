function counter() {
  let count = 0;
  return function() {
    return count++;
  }
}

const counter1 = counter();
console.log('counter1:', counter1());
console.log('counter1:', counter1());
console.log('counter1:', counter1());
const counter2 = counter();
console.log('counter2:', counter2());
console.log('counter2:', counter2());
