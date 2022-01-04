function f1(o) {
    o.name = 'Mary';
    o.value = 14;
}

function f2(x) {
    x = 15;
}

let obj = {
    name: 'Anna',
    value: 21,
}

let a = 5;

console.log(obj, 'a:', a);
f1(obj);
f2(a);
console.log(obj, 'a:', a);
