function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = () => {
    console.log('Hi,', this.name);
  };
}

User.prototype.bye = function () {
  console.log('Bye,', this.name);
};

const user1 = new User('Joe', 1);
const user2 = new User('Mary', 2);

console.log(user1);
console.log(user2);

user1.hello();
user2.hello();
user1.bye();
