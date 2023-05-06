/**
 * Modern way via Classes
 * have to use different name for property age to avoid an infinite loop
 */
class User {
    #age;

    constructor(name, age) {
        this.name = name;
        this._age = age;
        this.#age = age;
    }

    get age() {
        return `age: ${this._age}`;
    }

    set age(value) {
        if (value <= 0) {
            this._age = 1;
        } else {
            this._age = value;
        }
    }
}

const joe = new User('Joe', 21);
console.log(joe.age);
joe.age = 77;
console.log(joe.age);
joe.age = -77;
console.log(joe.age);
joe._age = -100;
console.log(joe._age);
// joe.#age = -200; // impossible to change #fields
// console.log(joe.#age);
