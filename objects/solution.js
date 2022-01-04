// make object ver 1
var point = new Object();
point.x = 5;
point.y = 2;

point.toString = function() { 
    console.log('this is toString() function');
    return 'x: ' + this.x + ', y: ' + this.y; 
}

point.valueOf = function() {
    console.log('this is valueOf() function');
    return 0xFFFF; 
}

console.log('--------- object to str, to number -----------');
//console.log('point => ' + point);
//console.log(point);
console.log('point => ' + String(point));
//console.log(point);
console.log('+point => ' + +point);
//document.write(point);
console.log('point.x => ' + point.x);
console.log('point.y => ' + point.y);
console.log('point.z => ' + point.z);
console.log('---');


// make object ver 2
var person = {
    name: "John",
    age: 25
}

console.log('person.name => ' + person.name);
console.log('person.age => ' + person.age);

console.log('person["name"] => ' + person["name"]);
console.log("person['age'] => " + person['age']);

console.log('---');


// make object ver 3
// ------ Constructor -----
function Point(x, y) {
    this.x = x;
    this.y = y;
}

var p = new Point(1, 2);

console.log('p.x => ' + p.x);
console.log('p.y => ' + p.y);
console.log(p);

// --- method
Point.prototype.toString = function() {
    return 'x: ' + this.x + ', y: ' + this.y;
}

console.log(p.toString());


// var - function
var b = function(x) {
    return x*x;
}

console.log(b(2));


// ------------------------------------------------------------
/*
var o = {};

var fieldName = 'y';
o.x = 1;
o[fieldName] = 2;

console.log(o);


// ------------------------------------------------------------
//console.log(a);
{
//    var a;
    let a;
    a = 5;
//    console.log(a);
}

//console.log(a);



console.log(5 / 0);
console.log(0 / 0);


*/
console.log('--------- check field exist -----------');
var o = {x: 1, y: 2};
console.log('o => ', o);
console.log("'x' in o => ", 'x' in o);
console.log("'z' in o => ", 'z' in o);
console.log("delete o.x => ", delete o.x);
console.log("delete o.z => ", delete o.z);
console.log("delete o => ", delete o);
console.log("o => ", o);

console.log(this);
for (field in this) {
    console.log(field);
}

