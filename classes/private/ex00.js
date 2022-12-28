class A {
  #a = 1;
  #b = 2;
  c = 3;

  constructor() {
    this.#a = 11;
    this.c = 33;
    this.d = 77;
  }

  toString() {
    return `a: ${this.#a}, b: ${this.#b}, c: ${this.c}, d: ${this.d}`;
  }
}

const a = new A();
console.log(a);
console.log('a.a:', a.a);
console.log('a.b:', a.b);
console.log('a.c:', a.c);
console.log(a.toString());
