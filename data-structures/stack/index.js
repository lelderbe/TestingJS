import { Stack } from './stack.js';

const stack = new Stack();
console.log(stack.isEmpty()); // true
stack.push(42);
console.log(stack.peek()); // 42
console.log(stack.peek()); // 42
stack.push(11);
console.log(stack.pop()); // 11
console.log(stack.pop()); // 42
