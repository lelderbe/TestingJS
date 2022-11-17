const heading = document.getElementById('hello');
console.log(heading);
console.dir(heading);

const card = document.createElement('div');
console.log(card);
// console.dir(card);
card.classList.add('card');

document.querySelector('.cards').prepend(card);
document.querySelector('.cards').append(card);
document.querySelector('.cards').before(card);
document.querySelector('.cards').after(card);

// card.remove();

// document.querySelector('p').replaceWith(card);

card.innerHTML = 'Hello';

card.insertAdjacentHTML('beforebegin', '<h2>Hi</h2>');

card.addEventListener('click', (ev, ev2) => console.log(ev, ev2));

console.log(document.body.childNodes);

const p = document.querySelectorAll('p');

p.forEach((item) => {
  console.log('item:', item);
  console.log('item.classList:', item.classList);
  if (item.matches('.one')) {
    console.log('mathes:', item);
  }
});
