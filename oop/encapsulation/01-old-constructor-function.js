/**
 * Old way via constructor function
 * have to use local var via closure to avoid an infinite loop
 */
function User(name, age) {
    this.name = name;
    // this.age = age;

    Object.defineProperty(this, 'age', {
        get: function () {
            return `age: ${age}`;
        },
        set: function (value) {
            console.log('set age');
            if (value <= 0) {
                age = 1;
            } else {
                age = value;
            }
        },
    });
}

const joe = new User('Joe', 21);
console.log(joe.age);
joe.age = 77;
console.log(joe.age);
joe.age = -77;
console.log(joe.age);
