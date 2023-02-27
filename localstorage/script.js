// let DB = {
//   tasks: [
//     { name: 'Task1', done: true },
//     { name: 'Task2', done: false },
//   ],
// };

localStorage.setItem('data', JSON.stringify(DB));

const DB = JSON.parse(localStorage.getItem('data')) || {
  tasks: [
    { name: 'xxx1', done: true },
    { name: 'xxx2', done: false },
  ],
};
console.log(DB);
