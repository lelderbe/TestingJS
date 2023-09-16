// Abstraction

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcArea() {
    return this.width * this.height;
  }
}

const r1 = new Rectangle(10, 10);
const r2 = new Rectangle(2, 5);

console.log(r1.calcArea());
console.log(r2.calcArea());

console.log(r1);
console.log(r2);

// Inheritance

class ColoredRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }

  show() {
    console.log(`${this.width}x${this.height} has color: ${this.color}`);
  }
}

const div = new ColoredRectangle(2, 3, 'green');
console.log(div.calcArea());
div.show();
