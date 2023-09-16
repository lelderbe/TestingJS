function Range(from, to) {
  if (!new.target) {
    return new Range(from, to);
  }
  this.from = from;
  this.to = to;
}

const a = new Range(1, 3);
const b = new Range(0, 2);
console.log(a, b);

const a2 = Range(1, 3);
const b2 = new Range(0, 2);
console.log(a2, b2);
